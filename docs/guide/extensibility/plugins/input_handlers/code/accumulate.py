import sublime_plugin


class ItemsInputHandler(sublime_plugin.ListInputHandler):
    def __init__(self, choices, accumulated=None, selected_index=0):
        self.choices = choices
        self.accumulated = accumulated or []
        self.selected_index = selected_index

        self.alt_pressed = False
        self.selected = None

    def want_event(self):
        # Declare that we want to receive the `event` argument.
        return True

    def validate(self, _value, _event):
        # We must override this method because we define `want_event`.
        # https://github.com/sublimehq/sublime_text/issues/6258
        return True

    def list_items(self):
        # Each selectable item represents
        # all accumulated items plus the new item as a list.
        return (
            [(item, self.accumulated + [item]) for item in self.choices],
            self.selected_index,
        )

    def confirm(self, value, event):
        # Record that the alt key was pressed when confirming
        # so that we can return a follow-up input handler
        # in `next_input`.
        self.alt_pressed = event["modifier_keys"].get("alt", False)
        self.selected = value

    def next_input(self, _args):
        if self.alt_pressed:
            selected_index = self.choices.index(self.selected[-1])
            return ItemsInputHandler(self.choices, self.selected, selected_index)
        return None


class AccumulateCommand(sublime_plugin.WindowCommand):
    def input(self, args):
        if "items" not in args:
            choices = "a b c d e".split(" ")
            return ItemsInputHandler(choices=choices)

    def run(self, items):
        self.window.run_command('insert', {'characters': " ".join(items)})
