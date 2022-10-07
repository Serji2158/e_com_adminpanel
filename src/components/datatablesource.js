export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
        </div>
      )
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
    {
    field: "age",
    headerName: "Age",
    width: 100,
  },
      {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      )
    }
  },
]

export const userRows = [
  {
    id: 1,
    userName: 'Snow',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "snow@gmail.com",
    age: 35
  },
  {
    id: 2,
    userName: 'Lannister',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "passive",
    email: "lannister@gmail.com",
    age: 42
  },
  {
    id: 3,
    userName: 'Lannister',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "pending",
    email: "Lannister@gmail.com",
    age: 45
  },
  {
    id: 4,
    userName: 'Stark',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "Stark@gmail.com",
    age: 16
  },
  {
    id: 5,
    userName: 'Targaryen',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "Targaryen@gmail.com",
    age: 28
  },
  {
    id: 6,
    userName: 'Melisandre',
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "Melisandre@gmail.com",
    age: 50
  },
  {
    id: 7,
    userName: 'Clifford',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "Clifford@gmail.com",
    age: 44
  },
  {
    id: 8,
    userName: 'Frances',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "Frances@gmail.com",
    age: 36
  },
  {
    id: 9,
    userName: 'Roxie',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "passive",
    email: "Roxie@gmail.com",
    age: 65
  },
    {
    id: 10,
    userName: 'Rozzy',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    status: "active",
    email: "Rozzy@gmail.com",
    age: 25
  },
];