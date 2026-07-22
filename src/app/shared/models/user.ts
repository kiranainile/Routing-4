export interface IUser {
  userName: string
  userId: string
  userRole: 'Candidate' | 'Admin'
  profileDescription: string
  profileImage: string
  skills: string[]
  experienceYears: string
  isActive: boolean
  address: Iaddress
  isAddSame: boolean
}

export interface Iaddress {
  current: Icurrent
  permanent: Ipermanent
}

export interface Icurrent {
  city: string
  state: string
  country: string
  zipcode: string
}

export interface Ipermanent {
  city: string
  state: string
  country: string
  zipcode: string
}


export interface Ires<T>{
  msg:string
  data:T
}