from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()

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
