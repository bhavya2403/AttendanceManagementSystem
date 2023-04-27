from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$cR6Y4s8Ohdgw778BQrJXLC$71YNDHFcAiCQL+fcPqogsyOYlCss7s86qYy2jtE0X+w='}

    def test_faculty_profile(self):
        response = self.client.post('/faculty/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            'id': '2019748548', 'email': 'rohit_1234@gmail.com', 'age': 50, 'gender': 'Male', 'post': 'Professor',
            'description': 'rohit received his Phd from the Department of Computer Science, IIT Delhi in 2010, '
                           'after which he joined DAIICT, Gandhinagar. He is an Associate Professor at DAIICT '
                           'since January 2019 His research interests lie in the areas of Image, Signal and '
                           'Geometry Processing, often relying on Variational methods, Differential Geometry, '
                           'Linear algebra and (convex) optimization.',
            'name': 'Rohit'})

    def test_mark_attendance_token(self):
        response = self.client.post('/faculty/mark_attendance/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'Introduction to Computer Science': 4, 'Software Engineering': 1})
