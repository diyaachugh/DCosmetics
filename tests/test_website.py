import os
import unittest


class TestDCosmeticsWebsite(unittest.TestCase):

    def test_index_exists(self):
        self.assertTrue(os.path.exists("index.html"))

    def test_css_exists(self):
        self.assertTrue(os.path.exists("style.css"))

    def test_javascript_exists(self):
        self.assertTrue(os.path.exists("script.js"))

    def test_images_folder_exists(self):
        self.assertTrue(os.path.isdir("images"))


if __name__ == "__main__":
    unittest.main()