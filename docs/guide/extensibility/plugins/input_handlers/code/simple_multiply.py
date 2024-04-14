import sublime_plugin


class SimpleMultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        for name in ['operand1', 'operand2']:
            if name not in args:
                return NumberInputHandler(name)


class NumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, name):
        self._name = name

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
