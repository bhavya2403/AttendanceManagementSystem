from django.test import TestCase, Client
import json

class TestFaculty(TestCase):
    def setUp(self):
        self.client = Client()
        self.token1 = 'pbkdf2_sha256$320000$cR6Y4s8Ohdgw778BQrJXLC$71YNDHFcAiCQL+fcPqogsyOYlCss7s86qYy2jtE0X+w='
        self.token2 = 'pbkdf2_sha256$320000$FKn16ArC5AlAm4nivt8agY$5IiDXKX0k2hJTujEMXrHmlDmVtKPeun6AIpOzQvXndY='
        self.header = {'HTTP_TOKEN': self.token1}

    def test_faculty_profile(self):
        self.header['HTTP_TOKEN'] = self.token1
        response = self.client.post('/faculty/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {
            'id': '2019748548', 'email': 'rohit_1234@gmail.com', 'age': 50, 'gender': 'Male', 'post': 'Professor',
            'description': 'rohit received his Phd from the Department of Computer Science, IIT Delhi in 2010, '
                           'after which he joined DAIICT, Gandhinagar. He is an Associate Professor at DAIICT '
                           'since January 2019 His research interests lie in the areas of Image, Signal and '
                           'Geometry Processing, often relying on Variational methods, Differential Geometry, '
                           'Linear algebra and (convex) optimization.', 'name': 'Rohit',
            'tot_courses': 2})

    def test_view_courses(self):
        self.header['HTTP_TOKEN'] = self.token1
        response=self.client.post('/faculty/view_courses/', **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            {'course_name': 'Introduction to Computer Science', 'semester': 'Winter-2023', 'total_students': 23},
            {'course_name': 'International Economy', 'semester': 'Winter-2023', 'total_students': 23}]
        })

    def test_mark_attendance(self):
        self.header['HTTP_TOKEN'] = self.token2
        response = self.client.post('/faculty/view_courses/mark_attendance', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023'
        }, **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            {'date': '2023-04-28', 'total_present': 4}, {'date': '2023-04-23', 'total_present': 4},
            {'date': '2023-04-24', 'total_present': 11}, {'date': '2023-04-07', 'total_present': 17}]
        })

    def test_attendance_page(self):
        self.header['HTTP_TOKEN'] = self.token2
        response = self.client.post('/faculty/view_courses/mark_attendance/attendance_page', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023',
            'date': '2023-04-23'
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

    def test_attendance_page_newclass(self):
        self.header['HTTP_TOKEN'] = self.token2
        response = self.client.post('/faculty/view_courses/mark_attendance/attendance_page', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023',
            'date': '2023-08-01'
        }, **self.header)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'data': [
            ['202002011', 'Ankit Patel', 'absent'], ['202002012', 'Priya Shah', 'absent'],
            ['202002013', 'Raj Patel', 'absent'], ['202002014', 'Neha Shah', 'absent'],
            ['202002015', 'Rajesh Patel', 'absent'], ['202002016', 'Preeti Shah', 'absent'],
            ['202002017', 'Nikhil Patel', 'absent'], ['202002018', 'Jiya Shah', 'absent'],
            ['202002019', 'Rakesh Patel', 'absent'], ['202002020', 'Sneha Shah', 'absent'],
            ['202002021', 'Naman Patel', 'absent'], ['202004000', 'Sophie Nelson', 'absent'],
            ['202004001', 'Ethan King', 'absent'], ['202004002', 'Oliver Cooper', 'absent'],
            ['202004003', 'Mia Scott', 'absent'], ['202004004', 'Lucas Rodriguez', 'absent'],
            ['202004005', 'Emily Turner', 'absent']
        ]})

    def test_change_attendance(self):
        self.header['HTTP_TOKEN'] = self.token2
        response = self.client.post('/faculty/view_courses/mark_attendance/attendance_page/submit', {
            'course_name': 'Digital Signal Processing', 'semester': 'Winter-2023',
            'date': '2023-04-24',
            'presence': json.dumps([
                ['202002011', 'Ankit Patel', 'present'], ['202002012', 'Priya Shah', 'present'],
                ['202002013', 'Raj Patel', 'present'], ['202002014', 'Neha Shah', 'present'],
                ['202002015', 'Rajesh Patel', 'present'], ['202002016', 'Preeti Shah', 'present'],
                ['202002017', 'Nikhil Patel', 'absent'], ['202002018', 'Jiya Shah', 'absent'],
                ['202002019', 'Rakesh Patel', 'absent'], ['202002020', 'Sneha Shah', 'absent'],
                ['202002021', 'Naman Patel', 'absent'], ['202004000', 'Sophie Nelson', 'absent'],
                ['202004001', 'Ethan King', 'absent'], ['202004002', 'Oliver Cooper', 'absent'],
                ['202004003', 'Mia Scott', 'absent'], ['202004004', 'Lucas Rodriguez', 'absent'],
                ['202004005', 'Emily Turner', 'absent']
            ])
        }, **self.header)
        self.assertEqual(response.status_code, 200)