from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client()
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$8e9QCCRMtxa6VQkJrlPtFQ$ISlxlJ6A70sZjTaOhXIojKjFuJBILOAhUvGOqjz8Cus='}

    def test_profile(self):
        response = self.client.post('/student/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            'name': 'Shivam Kansagara', 'batch': 'BTech III', 'id': '202001086',
            'email': 'shivamkansagara1@gmail.com',
            'courses': [
                ['Introduction to Computer Science', 2, 2],
                ['International Economy', 0, 2],
                ['Software Engineering', 1, 1],
                ['digital communication', 1, 1],
                ['Embedded hardware design', 1, 1],
                ['Digital-Analog Circuits', 0, 1]
            ]}
        )


