import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to our website',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: ' Please enter your name',
            trigger: 'waiting1'
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}',
            trigger: 'Help1'
        },
        {
            id: 'Help1',
            message: ' Tell me how I can help you?',
            trigger: 'options'
        },
        {
            id: 'options',
            options: [
                { value: 'Services', label: 'Services', trigger: 'Services' },
                { value: "Login", label: 'Login', trigger: 'Login' },
                { value: 'Payments', label: 'Payments', trigger: 'Payments' },
                { value: "Appointments", label: 'Appointments', trigger: 'Appointments' },
                { value: "Dates", label: 'Dates', trigger: 'Dates' },
                { value: "Profile", label: 'Profile', trigger: 'Profile' },
            ]
        },
        {
            id: 'Login',
            message: 'By clicking "Login", you can choose "Sing in whith Google" or sign up free by clicking "Sing Up"',
            trigger: 'Help2'
        },
        {
            id: 'Services',
            message: ' Our services include medical consultations with specialists in Urology, Cardiology, Radiology, Endocrinology, Gastroenterology, Psychiatry, Rheumatology and Dermatology. To see more details we recommend you click on "Services" on our main page',
            trigger: 'Help2'
        },
        {
            id: 'Payments',
            message: ' You must log in and click the button "Subscribe" >> "Learn More" >> "Buy", and complete the fields with your credit/debit card. Remember that the subscription is monthly and will allow you to get a medical appointment with our specialists.',
            trigger: 'Help2'
        },
        {
            id: 'Appointments',
            message: ' After you have logged in and subscribed, you can request a medical appointment by clicking the "Schedule" button. You will need to choose Doctor, Schedule and Date. Remember that confirmation will come to you by email.',
            trigger: 'Help2'
        },
        {
            id: 'Dates',
            message: ' To see your medical appointments, you must click on your profile photo (it is located at the top right) and then go to "My Dates."',
            trigger: 'Help2'
        },
        {
            id: 'Profile',
            message: ' To change your profile information, you must click on your profile photo (it is located at the top right) and then go to "Profile". There you can modify your profile photo, name, surname, birthday and ID, by clicking on "Modify Profile".',
            trigger: 'Help2'
        },
        {
            id: 'Help2',
            message: ' Can I help you with anything else?',
            trigger: 'options2'
        },
        {
            id: 'options2',
            options: [
                { value: 'Yes', label: 'Yes', trigger: 'Yes' },
                { value: "No", label: 'No', trigger: 'No' },
            ]
        },
        {
            id: 'Yes',
            message: ' Okey',
            trigger: 'Help1'
        },
        {
            id: 'No',
            message: ' I am glad I helped you. Remember that you can contact us by phone at +54 9 351 6867775 or by email at healthplus@gmail.com, goodbye!',
            end:true
        }
    ]
    return (
        <ChatBot
            steps={steps}
        />
    );
};

export default Chatbot;