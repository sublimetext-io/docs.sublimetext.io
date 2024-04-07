from html.entities import html5

import sublime_plugin


class InsertHtmlEntityCommand(sublime_plugin.TextCommand):
    def run(self, edit, entity):
        for region in self.view.sel():
            self.view.replace(edit, region, "&" + entity)

    def input(self, args):
        return EntityInputHandler()


class EntityInputHandler(sublime_plugin.ListInputHandler):
    def list_items(self):
        return sorted(html5.keys())

    def preview(self, value):
        return "Character: {}".format(html5.get(value))
