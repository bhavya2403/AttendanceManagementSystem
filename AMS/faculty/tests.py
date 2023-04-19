from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$TQyVik9SZG2wDe0mvMouSJ$caPRyzwsEYtS1QX8EawVgZKmXq/xse8fp1ls4hUYNr8='}

    def test_faculty_profile(self):
        response = self.client.post('/faculty/', {'email': 'rohit_1234@gmail.com',
                                                  'password': 'rohit2002',
                                                  'role': 'instructor'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'email': 'rohit_1234@gmail.com', 'id': 'rohit_1234', 'description': 'Done research in bla bla bla'})

    def test_mark_attendance(self):
        response = self.client.post('/faculty/mark_attendance/', {'email': 'rohit_1234@gmail.com',
                                                  'password': 'rohit2002',
                                                  'role': 'instructor'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'Introduction to Computer Science': 4, 'Software Engineering': 1})

    def test_faculty_profile_token(self):
        response = self.client.post('/faculty/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'email': 'rohit_1234@gmail.com', 'id': 'rohit_1234', 'description': 'Done research in bla bla bla'})

    def test_mark_attendance_token(self):
        response = self.client.post('/faculty/mark_attendance/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'Introduction to Computer Science': 4, 'Software Engineering': 1})
