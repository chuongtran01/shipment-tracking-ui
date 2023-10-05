export const constants = {
  global: {
    cancel: 'Cancel',
    back: 'Back',
  },
  home: {
    intro: {
      header: {
        systemic: 'Systematic',
        data: 'Data',
        deployment: 'deployment',
      },
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      button: 'Get started',
    },
    overview: {
      introduction: 'Introduction',
      overview: 'Overview',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna At vero eos et accusam ea rebum.',
    },
    benefits: [
      {
        id: 1,
        header: 'Dynamic',
        img: '/assets/images/undraw_server_status_re_n8ln.png',
        desc: 'In today’s digital world, secure file sharing is crucial to safeguarding sensitive information and preventing data breaches.',
      },
      {
        id: 2,
        header: 'Versatile',
        img: '/assets/images/undraw_data_processing_yrrv.png',
        desc: 'Creating, linking, and modifying all types of digital files in order to extract meaningful insights and support informed decision-making.',
      },
      {
        id: 3,
        header: 'Meticulous',
        img: '/assets/images/undraw_visual_data_re_mxxo.png',
        desc: 'Effective approaches to planning, executing, and monitoring projects to ensure their successful completion.',
      },
    ],
  },
  login: {
    welcome: 'Welcome to',
    name: 'File Transform',
    signIn: 'Sign in to continue',
    leftBackground: '/assets/images/Landing-page-background.png',
    hasNoAccount: "Don't have an account?",
    signUp: 'Sign up',
    username: 'Username',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    signInButton: 'Sign In',
    googleIcon: '/assets/images/Google Image.png',
    appleIcon: '/assets/images/apple logo.png',
  },
  registration: {
    createAccount: 'Create an account',
    hasAccount: 'Already have an account?',
    signIn: 'Sign In',
    leftBackground: '/assets/images/Landing-page-background.png',
    form: {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      button: 'Create Account',
    },
    googleIcon: '/assets/images/Google Image.png',
    appleIcon: '/assets/images/apple logo.png',
  },
  forgotPassword: {
    forgotPassword: "Forgot Password?",
    description: "Enter in your Email for a reset code",
    email: "Email",
    resetPassword: "Reset Password",
    questionMarks: {
      alt: "Question Marks",
      img: "/assets/images/QuestionMarks.png",
    },
    backToLogin: "Back to Log in"
  },
  sourceSelection: {
    selectSource: 'Select Source',
    viewAll: 'View All',
  },
  pipelineConfiguration: {
    steps: [
      {
        id: 1,
        title: "Configure Source",
        chevronRight: true,
      },
      {
        id: 2,
        title: "Configure Destination",
        chevronRight: true,
      },
      {
        id: 3,
        title: "Final Settings",
        chevronRight: false,
      }
    ],
    configureSource: {
      title: "Configure Source",
      description: "Please provide MongoDB connection settings or copy from one of the ",
      existingSources: "Existing sources",
      pipelineName: "Pipeline Name",
      databaseHost: "Database Host",
      databasePort: "Database Port",
      databaseUser: "Database User",
      databasePassword: "Database Password",
      databaseName: "Auth DB Name",
      openAccess: "Please open access to MongoDB port from Hero's IP address",
      ipAddress: "10.2.7.152",
      SSHconnection: {
        title: "Connect through SSH",
        description: "Connect securely through a SSH tunnel server",
      },
      testConnection: "Test Connection",
      testContinue: "Test & Continue",
    }
  }
};
