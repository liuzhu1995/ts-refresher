interface Credentials {
  password: string
  email: string
}

const creds: Credentials = {
  password: "abc",
  email: "test@gmail.com",
}

class AuthCredentials implements Credentials {
  password: string
  email: string

  constructor() {
    this.password = "qwe"
    this.email = ""
  }
}

function login(credentials: Credentials) {
  console.log(credentials)
}

login(new AuthCredentials())

type Role = "admin" | "user" | "editor"
let role: Role

function printRole(role: Role) {
  console.log(role)
}

printRole("user")

type Person = {
  name: string
  age?: number
  hobby: string
}

type PartialProperty<O, K extends keyof O> = Partial<Pick<O, K>> & Omit<O, K>
type RequiredProperty<O, K extends keyof O> = Required<Pick<O, K>> & O

const p1: PartialProperty<Person, "hobby"> = {
  name: "",
  age: 18,
}

const p2: RequiredProperty<Person, "age"> = {
  name: "",
  age: 18,
  hobby: "",
}

function printPerson(p: Person, k: string) {
  console.log(p.name)
}

type printPersonParams = Parameters<typeof printPerson>

async function getPerson() {
  const newPerson: Person = {
    name: "Jason",
    hobby: "play games",
  }
  return Promise.resolve(newPerson)
}

type ReturnTypeGetPerson = ReturnType<typeof getPerson>
type GetPersonResponse = Awaited<ReturnTypeGetPerson>

type A = {
  id: string | number
  name: string
}

const a = {
  id: 123,
  name: "",
} satisfies A

type Aa = typeof a
function printA(a: Aa) {
  console.log(a.id++)
}
