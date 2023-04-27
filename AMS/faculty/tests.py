from django.test import TestCase, Client
import json

class TestAuth(TestCase):
    def setUp(self):
        self.client = Client(HTTP_TOKEN='')
        self.header = {'HTTP_TOKEN': 'pbkdf2_sha256$320000$cR6Y4s8Ohdgw778BQrJXLC$71YNDHFcAiCQL+fcPqogsyOYlCss7s86qYy2jtE0X+w='}

    def test_faculty_profile(self):
        response = self.client.post('/faculty/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            'id': '2019748548', 'email': 'rohit_1234@gmail.com', 'age': 50, 'gender': 'Male', 'post': 'Professor',
            'description': 'Rohit received his Phd from the Department of Computer Science, IIT Delhi in 2010, '
                           'after which he joined DAIICT, Gandhinagar. He is an Associate Professor at DAIICT '
                           'since January 2019 His research interests lie in the areas of Image, Signal and '
                           'Geometry Processing, often relying on Variational methods, Differential Geometry, '
                           'Linear algebra and (convex) optimization.',
            'name': 'Rohit', 'tot_courses': 3})

    def test_view_courses(self):
        response=self.client.post('/faculty/view_courses/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            {'course_name': 'Introduction to Computer Science', 'semester': 'Winter-2023', 'total_students': 23},
            {'course_name': 'International Economy', 'semester': 'Winter-2023', 'total_students': 23}]
        })

    def test_mark_attendance(self):
        self.header['HTTP_TOKEN'] = 'pbkdf2_sha256$320000$FKn16ArC5AlAm4nivt8agY$5IiDXKX0k2hJTujEMXrHmlDmVtKPeun6AIpOzQvXndY='
        response = self.client.post('/faculty/view_courses/mark_attendance', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023'
        }, **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            {'date': '2023-04-28', 'total_present': 4},
            {'date': '2023-04-23', 'total_present': 4}]
        })

    def test_attendance_page(self):
        self.header['HTTP_TOKEN']='pbkdf2_sha256$320000$FKn16ArC5AlAm4nivt8agY$5IiDXKX0k2hJTujEMXrHmlDmVtKPeun6AIpOzQvXndY='
        response = self.client.post('/faculty/view_courses/mark_attendance/attendance_page', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023', 'date': '2023-04-23'
        }, **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            ['202002011', 'Ankit Patel', 'present'], ['202002012', 'Priya Shah', 'present'],
            ['202002013', 'Raj Patel', 'present'], ['202002014', 'Neha Shah', 'present'],
            ['202002015', 'Rajesh Patel', 'present'], ['202002016', 'Preeti Shah', 'present'],
            ['202002017', 'Nikhil Patel', 'present'], ['202002018', 'Jiya Shah', 'present'],
            ['202002019', 'Rakesh Patel', 'present'], ['202002020', 'Sneha Shah', 'present'],
            ['202002021', 'Naman Patel', 'present'], ['202004000', 'Sophie Nelson', 'present'],
            ['202004001', 'Ethan King', 'present'], ['202004002', 'Oliver Cooper', 'absent'],
            ['202004003', 'Mia Scott', 'absent'], ['202004004', 'Lucas Rodriguez', 'absent'],
            ['202004005', 'Emily Turner', 'absent']
        ]})