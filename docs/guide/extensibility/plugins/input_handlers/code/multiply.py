import sublime_plugin


class MultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        names = [name for name in ['operand1', 'operand2']
                 if name not in args]
        if names:
            return MultiNumberInputHandler(names)


class MultiNumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, names):
        self._name, *self.next_names = names

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def next_input(self, args):
        if self.next_names:
            return MultiNumberInputHandler(self.next_names)

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
