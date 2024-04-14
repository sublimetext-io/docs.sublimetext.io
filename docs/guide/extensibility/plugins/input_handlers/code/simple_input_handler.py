import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input(self, args):
        return MyTextInputHandler(self.view)


class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, view):
        self.view = view

    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"

    def preview(self, text):
        return ("Selections: {}, Characters: {}"
                .format(len(self.view.sel()), len(text)))
