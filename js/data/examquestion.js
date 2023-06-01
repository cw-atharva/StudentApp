const oopsExam = [
  {
    question: 'Which is not a feature of OOP in general definitions?',
    option: [
      {
        option: 'Efficient Code',
      },
      {
        option: 'Code reusability',
      },
      {
        option: 'Modularity',
      },
      {
        option: 'Duplicate/Redundant data',
      },
    ],

    correctOption: 4,
  },
  {
    question:
      'Which was the first purely object oriented programming language developed?',
    option: [
      {
        option: 'Kotlin',
      },
      {
        option: 'SmallTalk',
      },
      {
        option: 'Java',
      },
      {
        option: 'C++',
      },
    ],

    correctOption: 2,
  },
  {
    question: 'Which feature of OOP indicates code reusability?',
    option: [
      {
        option: 'Abstraction',
      },
      {
        option: 'Polymorphism',
      },
      {
        option: 'Encapsulation',
      },
      {
        option: 'Inheritance',
      },
    ],

    correctOption: 4,
  },
  {
    question: 'Which header file is required in C++ to use OOP?',
    option: [
      {
        option: 'OOP can be used without using any header file',
      },
      {
        option: 'stdlib.h',
      },
      {
        option: 'iostream.h',
      },
      {
        option: ' stdio.h',
      },
    ],

    correctOption: 1,
  },
  {
    question: 'Why Java is Partially OOP language?',
    option: [
      {
        option: ' It allows code to be written outside classes',
      },
      {
        option: 'It supports usual declaration of primitive data types',
      },
      {
        option: 'It does not support pointers',
      },
      {
        option: 'It doesn’t support all types of inheritance',
      },
    ],

    correctOption: 2,
  },
  {
    question: 'Which is the correct syntax of inheritance?',
    option: [
      {
        option:
          'class base_classname :access derived_classname{ /*define class body*/ };',
      },
      {
        option:
          'class derived_classname : access base_classname{ /*define class body*/ };',
      },
      {
        option:
          'class derived_classname : base_classname{ /*define class body*/ };',
      },
      {
        option:
          'class base_classname : derived_classname{ /*define class body*/ };',
      },
    ],

    correctOption: 2,
  },
  {
    question: 'Which among the following, for a pure OOP language, is true?',
    option: [
      {
        option: 'The language should follow at least 1 feature of OOP',
      },
      {
        option: 'The language must follow only 3 features of OOP',
      },
      {
        option: 'The language must follow all the rules of OOP',
      },
      {
        option: 'The language should follow 3 or more features of OOP',
      },
    ],

    correctOption: 3,
  },
  {
    question: ' How many types of access specifiers are provided in OOP (C++)?',
    option: [
      {
        option: 4,
      },
      {
        option: 3,
      },
      {
        option: 2,
      },
      {
        option: 1,
      },
    ],

    correctOption: 2,
  },
  {
    question: 'What is 1 + 2',
    option: [
      {
        option: 1,
      },
      {
        option: 2,
      },
      {
        option: 3,
      },
      {
        option: 4,
      },
    ],

    correctOption: 3,
  },
  {
    question:
      'In multilevel inheritance, which is the most significant feature of OOP used?',
    option: [
      {
        option: 'Code efficiency',
      },
      {
        option: 'Code readability',
      },
      {
        option: 'Flexibility',
      },
      {
        option: 'Code reusability',
      },
    ],

    correctOption: 4,
  },
];

const dbmsQuestions = [
  {
    question: 'What is a database?',
    option: [
      {option: 'A. A structured collection of data', isCorrect: true},
      {
        option: 'B. A programming language for creating web applications',
        isCorrect: false,
      },
      {
        option: 'C. A hardware component that stores computer files',
        isCorrect: false,
      },
      {
        option: 'D. A type of network protocol used for data transfer',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a primary key in a database table?',
    option: [
      {
        option: 'A. A unique identifier for each record in a table',
        isCorrect: true,
      },
      {option: 'B. A column that stores numeric values', isCorrect: false},
      {option: 'C. A data type for storing dates and times', isCorrect: false},
      {option: 'D. A constraint that ensures data integrity', isCorrect: false},
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is the purpose of a foreign key in a database?',
    option: [
      {
        option: 'A. To establish a relationship between two tables',
        isCorrect: true,
      },
      {option: 'B. To store encrypted data', isCorrect: false},
      {option: 'C. To improve query performance', isCorrect: false},
      {option: 'D. To enforce data constraints', isCorrect: false},
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is normalization in database design?',
    option: [
      {
        option:
          'A. The process of organizing data to minimize redundancy and dependency',
        isCorrect: true,
      },
      {option: 'B. A technique for indexing database tables', isCorrect: false},
      {
        option: 'C. The practice of creating backup copies of a database',
        isCorrect: false,
      },
      {
        option: 'D. The process of optimizing database performance',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a SQL query?',
    option: [
      {
        option:
          'A. A statement used to retrieve or manipulate data in a database',
        isCorrect: true,
      },
      {
        option: 'B. A programming language used for creating websites',
        isCorrect: false,
      },
      {
        option: 'C. A data type for storing text in a database',
        isCorrect: false,
      },
      {
        option: 'D. A protocol for transferring data between databases',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is an index in a database?',
    option: [
      {
        option: 'A. A data structure that improves the speed of data retrieval',
        isCorrect: true,
      },
      {
        option: 'B. A function used to aggregate data in a database',
        isCorrect: false,
      },
      {
        option: 'C. A mechanism for enforcing referential integrity',
        isCorrect: false,
      },
      {
        option: 'D. A constraint that ensures data uniqueness',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a transaction in a database?',
    option: [
      {
        option: 'A. A unit of work that is performed on a database',
        isCorrect: true,
      },
      {
        option: 'B. A method for securing a database from unauthorized access',
        isCorrect: false,
      },
      {
        option: 'C. A language used for defining database schema',
        isCorrect: false,
      },
      {option: 'D. A tool for generating random test data', isCorrect: false},
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is data integrity in a database?',
    option: [
      {
        option: 'A. The accuracy, consistency, and reliability of data',
        isCorrect: true,
      },
      {option: 'B. The process of encrypting sensitive data', isCorrect: false},
      {option: 'C. The practice of making frequent backups', isCorrect: false},
      {
        option: 'D. The speed at which data can be retrieved from a database',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a relational database?',
    option: [
      {
        option:
          'A. A database that organizes data into tables with relationships between them',
        isCorrect: true,
      },
      {
        option: 'B. A database that stores data in a hierarchical structure',
        isCorrect: false,
      },
      {
        option: 'C. A database that uses graph-based data structures',
        isCorrect: false,
      },
      {
        option: 'D. A database that stores data in key-value pairs',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a stored procedure in a database?',
    option: [
      {
        option:
          'A. A precompiled collection of SQL statements that can be executed on demand',
        isCorrect: true,
      },
      {
        option: 'B. A database backup technique for disaster recovery',
        isCorrect: false,
      },
      {
        option: 'C. A method for encrypting sensitive data in a database',
        isCorrect: false,
      },
      {
        option: 'D. A constraint that enforces data uniqueness in a table',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
];

const operatingSystemQuestions = [
  {
    question: 'What is an operating system?',
    option: [
      {
        option:
          'A. Software that manages computer hardware and software resources',
        isCorrect: true,
      },
      {
        option: 'B. A graphical user interface for interacting with a computer',
        isCorrect: false,
      },
      {
        option: 'C. A programming language used for system-level development',
        isCorrect: false,
      },
      {option: 'D. A type of computer network architecture', isCorrect: false},
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is virtual memory?',
    option: [
      {
        option:
          'A. A memory management technique that allows the use of secondary storage as an extension of the main memory',
        isCorrect: true,
      },
      {
        option: 'B. A type of memory used exclusively by virtual machines',
        isCorrect: false,
      },
      {
        option:
          'C. A hardware component that provides additional memory to a computer system',
        isCorrect: false,
      },
      {
        option: 'D. A technique for managing memory leaks in software',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a process in an operating system?',
    option: [
      {
        option: 'A. An instance of a computer program that is being executed',
        isCorrect: true,
      },
      {
        option:
          'B. A component that manages user interactions with the operating system',
        isCorrect: false,
      },
      {
        option:
          'C. A device driver used for communication with hardware devices',
        isCorrect: false,
      },
      {
        option: 'D. A type of file system used in distributed computing',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is the purpose of a scheduler in an operating system?',
    option: [
      {
        option:
          'A. To manage the execution of processes and allocate system resources',
        isCorrect: true,
      },
      {
        option: 'B. To control user access to the operating system',
        isCorrect: false,
      },
      {
        option:
          'C. To provide an interface for users to interact with the operating system',
        isCorrect: false,
      },
      {
        option: 'D. To maintain the integrity of the file system',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a deadlock in operating systems?',
    option: [
      {
        option:
          'A. A situation where two or more processes are unable to proceed because each is waiting for the other to release a resource',
        isCorrect: true,
      },
      {
        option:
          'B. A security vulnerability that allows unauthorized access to a computer system',
        isCorrect: false,
      },
      {
        option: 'C. A hardware failure that causes a computer system to crash',
        isCorrect: false,
      },
      {
        option:
          'D. A software bug that causes a program to become unresponsive',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is the purpose of device drivers in operating systems?',
    option: [
      {
        option:
          'A. To enable communication between the operating system and hardware devices',
        isCorrect: true,
      },
      {
        option: 'B. To manage user accounts and access privileges',
        isCorrect: false,
      },
      {
        option:
          'C. To provide a user-friendly interface for interacting with the operating system',
        isCorrect: false,
      },
      {
        option: 'D. To protect the operating system from malicious software',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a file system in an operating system?',
    option: [
      {
        option:
          'A. A method for organizing and storing files on a storage device',
        isCorrect: true,
      },
      {
        option:
          'B. A software component that controls access to the operating system',
        isCorrect: false,
      },
      {
        option: 'C. A protocol for network communication between computers',
        isCorrect: false,
      },
      {
        option:
          'D. A type of memory used for caching frequently accessed files',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is multitasking in operating systems?',
    option: [
      {
        option:
          'A. The ability of an operating system to execute multiple tasks concurrently',
        isCorrect: true,
      },
      {
        option:
          'B. The process of dividing a large program into smaller modules',
        isCorrect: false,
      },
      {
        option: 'C. The use of multiple processors in a computer system',
        isCorrect: false,
      },
      {
        option:
          'D. The technique of sharing resources between different applications',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a shell in an operating system?',
    option: [
      {
        option:
          'A. A command-line interface for interacting with the operating system',
        isCorrect: true,
      },
      {
        option: 'B. A hardware component that stores frequently accessed data',
        isCorrect: false,
      },
      {
        option: 'C. A security mechanism for protecting the operating system',
        isCorrect: false,
      },
      {
        option:
          'D. A virtual machine used for running multiple operating systems',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is the purpose of an interrupt in operating systems?',
    option: [
      {
        option:
          'A. To signal the processor that an event requiring immediate attention has occurred',
        isCorrect: true,
      },
      {
        option:
          'B. To schedule the execution of processes in a fair and efficient manner',
        isCorrect: false,
      },
      {
        option:
          'C. To provide an interface for users to interact with the operating system',
        isCorrect: false,
      },
      {
        option:
          'D. To manage the allocation of system resources to different processes',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
];

const computerNetworkQuestions = [
  {
    question: 'What is a computer network?',
    option: [
      {
        option:
          'A. A collection of interconnected devices for sharing resources and information',
        isCorrect: true,
      },
      {
        option:
          'B. A computer program that allows users to browse the internet',
        isCorrect: false,
      },
      {
        option: 'C. A type of computer hardware used for data storage',
        isCorrect: false,
      },
      {
        option: 'D. A protocol for wireless communication between devices',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is an IP address?',
    option: [
      {
        option: 'A. A unique identifier assigned to each device on a network',
        isCorrect: true,
      },
      {
        option: 'B. A software application for sending and receiving emails',
        isCorrect: false,
      },
      {
        option: 'C. A network topology used for connecting devices in a ring',
        isCorrect: false,
      },
      {
        option: 'D. A security mechanism for encrypting network traffic',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a router?',
    option: [
      {
        option:
          'A. A network device that forwards data packets between computer networks',
        isCorrect: true,
      },
      {
        option: 'B. A cable used to connect devices in a local area network',
        isCorrect: false,
      },
      {
        option:
          'C. A software program that blocks unauthorized access to a network',
        isCorrect: false,
      },
      {
        option:
          'D. A device used for converting digital signals to analog signals',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a firewall?',
    option: [
      {
        option:
          'A. A security device that monitors and controls incoming and outgoing network traffic',
        isCorrect: true,
      },
      {
        option:
          'B. A network protocol for transferring files between computers',
        isCorrect: false,
      },
      {
        option: 'C. A device used for amplifying network signals',
        isCorrect: false,
      },
      {
        option: 'D. A type of computer virus that spreads through a network',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is the purpose of DNS (Domain Name System)?',
    option: [
      {option: 'A. To translate domain names to IP addresses', isCorrect: true},
      {
        option: 'B. To encrypt network traffic for secure communication',
        isCorrect: false,
      },
      {
        option: 'C. To manage network resources and allocate IP addresses',
        isCorrect: false,
      },
      {
        option: 'D. To connect multiple local area networks together',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a protocol in computer networks?',
    option: [
      {
        option:
          'A. A set of rules governing the exchange of data between devices',
        isCorrect: true,
      },
      {
        option: 'B. A device used for connecting wireless devices to a network',
        isCorrect: false,
      },
      {
        option: 'C. A type of network topology used in large-scale networks',
        isCorrect: false,
      },
      {
        option: 'D. A software program for monitoring network performance',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is Ethernet?',
    option: [
      {
        option:
          'A. A widely used networking technology for local area networks',
        isCorrect: true,
      },
      {
        option: 'B. A web browser for accessing internet resources',
        isCorrect: false,
      },
      {
        option: 'C. A type of network cable used for long-distance connections',
        isCorrect: false,
      },
      {
        option: 'D. A protocol for secure communication over the internet',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a subnet mask?',
    option: [
      {
        option:
          'A. A value that determines the network and host portions of an IP address',
        isCorrect: true,
      },
      {
        option:
          'B. A device used for connecting multiple computers in a network',
        isCorrect: false,
      },
      {
        option:
          'C. A software program for detecting and removing network threats',
        isCorrect: false,
      },
      {
        option:
          'D. A protocol for synchronizing clocks in a distributed network',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a LAN (Local Area Network)?',
    option: [
      {
        option:
          'A. A network that connects devices within a limited geographic area',
        isCorrect: true,
      },
      {option: 'B. A network protocol for sending emails', isCorrect: false},
      {
        option:
          'C. A type of network topology used for connecting multiple networks',
        isCorrect: false,
      },
      {
        option:
          'D. A device used for connecting a computer to a telephone line',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
  {
    question: 'What is a WAN (Wide Area Network)?',
    option: [
      {
        option: 'A. A network that spans a large geographic area',
        isCorrect: true,
      },
      {
        option: 'B. A software program for managing database systems',
        isCorrect: false,
      },
      {option: 'C. A device used for wireless communication', isCorrect: false},
      {
        option: 'D. A protocol for transferring files between computers',
        isCorrect: false,
      },
    ],
    correctOption: 1, // The correct option is "A"
  },
];

export const examQuestion = [
  oopsExam,
  dbmsQuestions,
  operatingSystemQuestions,
  computerNetworkQuestions,
];
