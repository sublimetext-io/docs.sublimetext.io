import sublime_plugin


# region handler
# region handler-no-preview
class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"
# endregion handler-no-preview

    def preview(self, text):
        return "Characters: {}".format(len(text))
# endregion handler
