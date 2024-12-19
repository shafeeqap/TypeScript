// Utility Types
// Definition: Built-in TypeScript types that help manipulate existing types.
// We can use the 'Utility Types' alternative of 'read only' to assign each type.

type Users = {
  readonly name: string;
  age: number;
};

const usersDetails: Users = {
  name: "Shafeeq",
  age: 30,
};

usersDetails.name = "Rushdan"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
// -------------------------------------------------------------------------------------------------- //

// Uses of Utility Types
// 1: Readonly

type Users1 = {
  name: string;
  age: number;
};

const usersDetail: Readonly<Users1> = {
  name: "Shafeeq",
  age: 30,
};
usersDetail.name = "Muhammed"; // ❌ Error: Cannot assign to 'name' because it is a read-only property. (Readonly)

// 2: Partial<T> Makes all properties of T optional.

const a: Partial<Users1> = {
  name: "Shafeeq", // Only `name` is provided, `age` is optional
};

// 3: Required<T>: Makes all properties of T required.
type Users2 = {
  id?: number;
  name?: string;
};

const b: Required<Users2> = { id: 1, name: "John" }; // Now both `id` and `name` are required

// 4: Pick<T, K>: Creates a type by selecting specific keys from T.
// We can pick a particular type from another type and assign it to a new type using the 'Pick' utility.

type UserInfo = {
  id: number;
  name: string;
  age: number;
};

type UserSummary = Pick<UserInfo, "id" | "name">; // 'UserSummary' is a new type.

const userSummary: UserSummary = { id: 1, name: "John" }; // Only `id` and `name` are allowed

// 5: Omit<T, K>: Creates a type by omitting specific keys from T.
type Userinfo = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutAge = Omit<Userinfo, "age">; // In this case, it doesn't need only 'age'; so 'Omit' utility is useful.

const userWithoutAge: UserWithoutAge = { id: 1, name: "John" }; // `age` is omitted

// 6: Exclude<T, K>
// 'Exclude' is useful in cases of union type. It works like Omit.
type StatusTypes = "pending" | "completed" | "failed";
const Status: Exclude<StatusTypes, "failed"> = "completed"; // 'failed' is excluded.

// 7: Record<K, T>: Constructs an object type where each key in K has a value of type T.
// We don't know which types exist, especially like data getting from an API. In this case 'Record' utility is useful.
type Food = Record<string, any>; // <key, value>

const food: Food = {
  PIZZA: "pizza",
  KFC: "kfc",
  CHICKEN: "chicken",
};

// 8: Indexing<[index: string]: T> key and value is dynamic. It similar Record.
type Food1={
  [index: string]: any
}

const food1: Food1 = {
  PIZZA: "pizza",
  KFC: "kfc",
  CHICKEN: "chicken",
};