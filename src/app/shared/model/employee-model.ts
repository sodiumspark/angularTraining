
export interface Employee{
    name:String,
    email:String
}

export const employees:Employee[]=[      {
    email:"chinmay@hybrowlabs.com",
    name:"chinmay"
  },

  {
    email:"someName@comau.com",
    name:"someName"
  }
]

export interface RestResponse{
  loading:boolean,
  error:boolean,
  fetched:boolean
}