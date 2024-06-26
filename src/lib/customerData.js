const customersData = [
  {
    name: "John Doe",
    profile: "http://example.com/profiles/johndoe",
    avatar: "http://example.com/avatars/johndoe.jpg",
    email: "john.doe@example.com",
    age: 28,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1001",
        dateOfBill: "2024-01-15",
        amount: 250.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1006",
        dateOfBill: "2024-05-10",
        amount: 300.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1011",
        dateOfBill: "2024-09-18",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1016",
        dateOfBill: "2024-12-05",
        amount: 350.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Jane Smith",
    profile: "http://example.com/profiles/janesmith",
    avatar: "http://example.com/avatars/janesmith.jpg",
    email: "jane.smith@example.com",
    age: 34,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1002",
        dateOfBill: "2024-02-20",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1007",
        dateOfBill: "2024-06-15",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1012",
        dateOfBill: "2024-10-22",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Robert Johnson",
    profile: "http://example.com/profiles/robertjohnson",
    avatar: "http://example.com/avatars/robertjohnson.jpg",
    email: "robert.johnson@example.com",
    age: 42,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1003",
        dateOfBill: "2024-03-10",
        amount: 150.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1008",
        dateOfBill: "2024-07-08",
        amount: 200.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1013",
        dateOfBill: "2024-11-12",
        amount: 450.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Emily Davis",
    profile: "http://example.com/profiles/emilydavis",
    avatar: "http://example.com/avatars/emilydavis.jpg",
    email: "emily.davis@example.com",
    age: 29,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1004",
        dateOfBill: "2024-04-05",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1009",
        dateOfBill: "2024-08-20",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1014",
        dateOfBill: "2024-12-01",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Michael Brown",
    profile: "http://example.com/profiles/michaelbrown",
    avatar: "http://example.com/avatars/michaelbrown.jpg",
    email: "michael.brown@example.com",
    age: 37,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1005",
        dateOfBill: "2024-05-22",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1010",
        dateOfBill: "2024-09-05",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1015",
        dateOfBill: "2024-11-25",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sarah Johnson",
    profile: "http://example.com/profiles/sarahjohnson",
    avatar: "http://example.com/avatars/sarahjohnson.jpg",
    email: "sarah.johnson@example.com",
    age: 39,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1017",
        dateOfBill: "2024-01-08",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1022",
        dateOfBill: "2024-06-20",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1027",
        dateOfBill: "2024-10-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Alexandra Brown",
    profile: "http://example.com/profiles/alexandrabrown",
    avatar: "http://example.com/avatars/alexandrabrown.jpg",
    email: "alexandra.brown@example.com",
    age: 31,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1018",
        dateOfBill: "2024-02-12",
        amount: 200.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1023",
        dateOfBill: "2024-07-30",
        amount: 500.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1028",
        dateOfBill: "2024-11-08",
        amount: 600.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "David Smith",
    profile: "http://example.com/profiles/davidsmith",
    avatar: "http://example.com/avatars/davidsmith.jpg",
    email: "david.smith@example.com",
    age: 33,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1019",
        dateOfBill: "2024-03-25",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1024",
        dateOfBill: "2024-08-12",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1029",
        dateOfBill: "2024-12-18",
        amount: 280.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophia Taylor",
    profile: "http://example.com/profiles/sophiataylor",
    avatar: "http://example.com/avatars/sophiataylor.jpg",
    email: "sophia.taylor@example.com",
    age: 27,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1020",
        dateOfBill: "2024-04-18",
        amount: 350.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1025",
        dateOfBill: "2024-09-30",
        amount: 600.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1030",
        dateOfBill: "2024-12-27",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "William Adams",
    profile: "http://example.com/profiles/williamadams",
    avatar: "http://example.com/avatars/williamadams.jpg",
    email: "william.adams@example.com",
    age: 36,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1021",
        dateOfBill: "2024-05-10",
        amount: 180.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1026",
        dateOfBill: "2024-10-18",
        amount: 220.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1031",
        dateOfBill: "2024-11-30",
        amount: 400.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Michael Johnson",
    profile: "http://example.com/profiles/michaeljohnson",
    avatar: "http://example.com/avatars/michaeljohnson.jpg",
    email: "michael.johnson@example.com",
    age: 30,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1001",
        dateOfBill: "2024-01-20",
        amount: 280.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1006",
        dateOfBill: "2024-05-12",
        amount: 320.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1011",
        dateOfBill: "2024-09-25",
        amount: 300.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1016",
        dateOfBill: "2024-12-10",
        amount: 380.00,
        status: "Pending"
      }
    ]
  },
  {
    name: "Sophie Anderson",
    profile: "http://example.com/profiles/sophieanderson",
    avatar: "http://example.com/avatars/sophieanderson.jpg",
    email: "sophie.anderson@example.com",
    age: 32,
    bankAccount: "MasterCard",
    transactions: [
      {
        invoiceNumber: "INV-1002",
        dateOfBill: "2024-02-22",
        amount: 450.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1007",
        dateOfBill: "2024-06-18",
        amount: 390.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1012",
        dateOfBill: "2024-10-28",
        amount: 520.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Oliver Brown",
    profile: "http://example.com/profiles/oliverbrown",
    avatar: "http://example.com/avatars/oliverbrown.jpg",
    email: "oliver.brown@example.com",
    age: 35,
    bankAccount: "American Express",
    transactions: [
      {
        invoiceNumber: "INV-1003",
        dateOfBill: "2024-03-15",
        amount: 300.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1008",
        dateOfBill: "2024-07-10",
        amount: 280.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1013",
        dateOfBill: "2024-11-15",
        amount: 350.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Isabella Martinez",
    profile: "http://example.com/profiles/isabellamartinez",
    avatar: "http://example.com/avatars/isabellamartinez.jpg",
    email: "isabella.martinez@example.com",
    age: 28,
    bankAccount: "PayPal",
    transactions: [
      {
        invoiceNumber: "INV-1004",
        dateOfBill: "2024-04-10",
        amount: 400.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1009",
        dateOfBill: "2024-08-22",
        amount: 320.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1014",
        dateOfBill: "2024-12-05",
        amount: 300.00,
        status: "Paid"
      }
    ]
  },
  {
    name: "Lucas Miller",
    profile: "http://example.com/profiles/lucasmiller",
    avatar: "http://example.com/avatars/lucasmiller.jpg",
    email: "lucas.miller@example.com",
    age: 31,
    bankAccount: "Visa",
    transactions: [
      {
        invoiceNumber: "INV-1005",
        dateOfBill: "2024-05-05",
        amount: 350.00,
        status: "Pending"
      },
      {
        invoiceNumber: "INV-1010",
        dateOfBill: "2024-09-15",
        amount: 420.00,
        status: "Paid"
      },
      {
        invoiceNumber: "INV-1015",
        dateOfBill: "2024-11-30",
        amount: 390.00,
        status: "Pending"
      }
    ]
  }
  // Add more customers as needed
];

export default customersData;
