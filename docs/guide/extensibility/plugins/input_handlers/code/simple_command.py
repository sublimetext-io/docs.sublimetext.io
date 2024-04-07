# region command
# region command-no-input
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)
# endregion command-no-input

    def input(self, args):
        return MyTextInputHandler()
# endregion command
