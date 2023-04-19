from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$htW8P1UTeZG9OWi9drMVih$6KhZ/To5eYUeThxpCxZEF8olLTXIQF3Jy0/ku2H+aO4='}

    def test_profile(self):
        response = self.client.post('/student/', {'email': '202001067@daiict.ac.in', 'password':
            'bhavya', 'role': 'student'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'name': 'Bhavya Rajdev',
                                    'batch': 'MTech I',
                                    'id': '202001067',
                                    'Organic Chemistry': {'present': 0, 'total': 0},
                                    'Software Engineering': {'present': 1, 'total': 3}})
    def test_profile_token(self):
        response = self.client.post('/student/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'name': 'Bhavya Rajdev',
                                    'batch': 'MTech I',
                                    'id': '202001067',
                                    'Organic Chemistry': {'present': 0, 'total': 0},
                                    'Software Engineering': {'present': 1, 'total': 3}})


