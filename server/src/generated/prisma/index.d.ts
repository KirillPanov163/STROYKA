
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Username
 * 
 */
export type Username = $Result.DefaultSelection<Prisma.$UsernamePayload>
/**
 * Model Meta_data
 * 
 */
export type Meta_data = $Result.DefaultSelection<Prisma.$Meta_dataPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model My_work
 * 
 */
export type My_work = $Result.DefaultSelection<Prisma.$My_workPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usernames
 * const usernames = await prisma.username.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usernames
   * const usernames = await prisma.username.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.username`: Exposes CRUD operations for the **Username** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usernames
    * const usernames = await prisma.username.findMany()
    * ```
    */
  get username(): Prisma.UsernameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta_data`: Exposes CRUD operations for the **Meta_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meta_data
    * const meta_data = await prisma.meta_data.findMany()
    * ```
    */
  get meta_data(): Prisma.Meta_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.my_work`: Exposes CRUD operations for the **My_work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more My_works
    * const my_works = await prisma.my_work.findMany()
    * ```
    */
  get my_work(): Prisma.My_workDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Username: 'Username',
    Meta_data: 'Meta_data',
    Faq: 'Faq',
    Service: 'Service',
    My_work: 'My_work',
    Contacts: 'Contacts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "username" | "meta_data" | "faq" | "service" | "my_work" | "contacts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Username: {
        payload: Prisma.$UsernamePayload<ExtArgs>
        fields: Prisma.UsernameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsernameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsernameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          findFirst: {
            args: Prisma.UsernameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsernameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          findMany: {
            args: Prisma.UsernameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>[]
          }
          create: {
            args: Prisma.UsernameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          createMany: {
            args: Prisma.UsernameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsernameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          update: {
            args: Prisma.UsernameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          deleteMany: {
            args: Prisma.UsernameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsernameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsernameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsernamePayload>
          }
          aggregate: {
            args: Prisma.UsernameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsername>
          }
          groupBy: {
            args: Prisma.UsernameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsernameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsernameCountArgs<ExtArgs>
            result: $Utils.Optional<UsernameCountAggregateOutputType> | number
          }
        }
      }
      Meta_data: {
        payload: Prisma.$Meta_dataPayload<ExtArgs>
        fields: Prisma.Meta_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Meta_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Meta_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          findFirst: {
            args: Prisma.Meta_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Meta_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          findMany: {
            args: Prisma.Meta_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>[]
          }
          create: {
            args: Prisma.Meta_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          createMany: {
            args: Prisma.Meta_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Meta_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          update: {
            args: Prisma.Meta_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          deleteMany: {
            args: Prisma.Meta_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Meta_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Meta_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Meta_dataPayload>
          }
          aggregate: {
            args: Prisma.Meta_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta_data>
          }
          groupBy: {
            args: Prisma.Meta_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meta_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.Meta_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Meta_dataCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      My_work: {
        payload: Prisma.$My_workPayload<ExtArgs>
        fields: Prisma.My_workFieldRefs
        operations: {
          findUnique: {
            args: Prisma.My_workFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.My_workFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          findFirst: {
            args: Prisma.My_workFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.My_workFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          findMany: {
            args: Prisma.My_workFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>[]
          }
          create: {
            args: Prisma.My_workCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          createMany: {
            args: Prisma.My_workCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.My_workDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          update: {
            args: Prisma.My_workUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          deleteMany: {
            args: Prisma.My_workDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.My_workUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.My_workUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_workPayload>
          }
          aggregate: {
            args: Prisma.My_workAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMy_work>
          }
          groupBy: {
            args: Prisma.My_workGroupByArgs<ExtArgs>
            result: $Utils.Optional<My_workGroupByOutputType>[]
          }
          count: {
            args: Prisma.My_workCountArgs<ExtArgs>
            result: $Utils.Optional<My_workCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    username?: UsernameOmit
    meta_data?: Meta_dataOmit
    faq?: FaqOmit
    service?: ServiceOmit
    my_work?: My_workOmit
    contacts?: ContactsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Username
   */

  export type AggregateUsername = {
    _count: UsernameCountAggregateOutputType | null
    _avg: UsernameAvgAggregateOutputType | null
    _sum: UsernameSumAggregateOutputType | null
    _min: UsernameMinAggregateOutputType | null
    _max: UsernameMaxAggregateOutputType | null
  }

  export type UsernameAvgAggregateOutputType = {
    id: number | null
  }

  export type UsernameSumAggregateOutputType = {
    id: number | null
  }

  export type UsernameMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsernameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsernameCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    twoFACode: number
    twoFACodeExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsernameAvgAggregateInputType = {
    id?: true
  }

  export type UsernameSumAggregateInputType = {
    id?: true
  }

  export type UsernameMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsernameMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsernameCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    twoFACode?: true
    twoFACodeExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsernameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Username to aggregate.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usernames
    **/
    _count?: true | UsernameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsernameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsernameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsernameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsernameMaxAggregateInputType
  }

  export type GetUsernameAggregateType<T extends UsernameAggregateArgs> = {
        [P in keyof T & keyof AggregateUsername]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsername[P]>
      : GetScalarType<T[P], AggregateUsername[P]>
  }




  export type UsernameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsernameWhereInput
    orderBy?: UsernameOrderByWithAggregationInput | UsernameOrderByWithAggregationInput[]
    by: UsernameScalarFieldEnum[] | UsernameScalarFieldEnum
    having?: UsernameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsernameCountAggregateInputType | true
    _avg?: UsernameAvgAggregateInputType
    _sum?: UsernameSumAggregateInputType
    _min?: UsernameMinAggregateInputType
    _max?: UsernameMaxAggregateInputType
  }

  export type UsernameGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    twoFACode: string | null
    twoFACodeExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsernameCountAggregateOutputType | null
    _avg: UsernameAvgAggregateOutputType | null
    _sum: UsernameSumAggregateOutputType | null
    _min: UsernameMinAggregateOutputType | null
    _max: UsernameMaxAggregateOutputType | null
  }

  type GetUsernameGroupByPayload<T extends UsernameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsernameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsernameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsernameGroupByOutputType[P]>
            : GetScalarType<T[P], UsernameGroupByOutputType[P]>
        }
      >
    >


  export type UsernameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    twoFACode?: boolean
    twoFACodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["username"]>



  export type UsernameSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    twoFACode?: boolean
    twoFACodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsernameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "twoFACode" | "twoFACodeExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["username"]>

  export type $UsernamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Username"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      twoFACode: string | null
      twoFACodeExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["username"]>
    composites: {}
  }

  type UsernameGetPayload<S extends boolean | null | undefined | UsernameDefaultArgs> = $Result.GetResult<Prisma.$UsernamePayload, S>

  type UsernameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsernameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsernameCountAggregateInputType | true
    }

  export interface UsernameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Username'], meta: { name: 'Username' } }
    /**
     * Find zero or one Username that matches the filter.
     * @param {UsernameFindUniqueArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsernameFindUniqueArgs>(args: SelectSubset<T, UsernameFindUniqueArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Username that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsernameFindUniqueOrThrowArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsernameFindUniqueOrThrowArgs>(args: SelectSubset<T, UsernameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Username that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindFirstArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsernameFindFirstArgs>(args?: SelectSubset<T, UsernameFindFirstArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Username that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindFirstOrThrowArgs} args - Arguments to find a Username
     * @example
     * // Get one Username
     * const username = await prisma.username.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsernameFindFirstOrThrowArgs>(args?: SelectSubset<T, UsernameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usernames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usernames
     * const usernames = await prisma.username.findMany()
     * 
     * // Get first 10 Usernames
     * const usernames = await prisma.username.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usernameWithIdOnly = await prisma.username.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsernameFindManyArgs>(args?: SelectSubset<T, UsernameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Username.
     * @param {UsernameCreateArgs} args - Arguments to create a Username.
     * @example
     * // Create one Username
     * const Username = await prisma.username.create({
     *   data: {
     *     // ... data to create a Username
     *   }
     * })
     * 
     */
    create<T extends UsernameCreateArgs>(args: SelectSubset<T, UsernameCreateArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usernames.
     * @param {UsernameCreateManyArgs} args - Arguments to create many Usernames.
     * @example
     * // Create many Usernames
     * const username = await prisma.username.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsernameCreateManyArgs>(args?: SelectSubset<T, UsernameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Username.
     * @param {UsernameDeleteArgs} args - Arguments to delete one Username.
     * @example
     * // Delete one Username
     * const Username = await prisma.username.delete({
     *   where: {
     *     // ... filter to delete one Username
     *   }
     * })
     * 
     */
    delete<T extends UsernameDeleteArgs>(args: SelectSubset<T, UsernameDeleteArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Username.
     * @param {UsernameUpdateArgs} args - Arguments to update one Username.
     * @example
     * // Update one Username
     * const username = await prisma.username.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsernameUpdateArgs>(args: SelectSubset<T, UsernameUpdateArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usernames.
     * @param {UsernameDeleteManyArgs} args - Arguments to filter Usernames to delete.
     * @example
     * // Delete a few Usernames
     * const { count } = await prisma.username.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsernameDeleteManyArgs>(args?: SelectSubset<T, UsernameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usernames
     * const username = await prisma.username.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsernameUpdateManyArgs>(args: SelectSubset<T, UsernameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Username.
     * @param {UsernameUpsertArgs} args - Arguments to update or create a Username.
     * @example
     * // Update or create a Username
     * const username = await prisma.username.upsert({
     *   create: {
     *     // ... data to create a Username
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Username we want to update
     *   }
     * })
     */
    upsert<T extends UsernameUpsertArgs>(args: SelectSubset<T, UsernameUpsertArgs<ExtArgs>>): Prisma__UsernameClient<$Result.GetResult<Prisma.$UsernamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameCountArgs} args - Arguments to filter Usernames to count.
     * @example
     * // Count the number of Usernames
     * const count = await prisma.username.count({
     *   where: {
     *     // ... the filter for the Usernames we want to count
     *   }
     * })
    **/
    count<T extends UsernameCountArgs>(
      args?: Subset<T, UsernameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsernameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Username.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsernameAggregateArgs>(args: Subset<T, UsernameAggregateArgs>): Prisma.PrismaPromise<GetUsernameAggregateType<T>>

    /**
     * Group by Username.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsernameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsernameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsernameGroupByArgs['orderBy'] }
        : { orderBy?: UsernameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsernameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsernameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Username model
   */
  readonly fields: UsernameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Username.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsernameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Username model
   */
  interface UsernameFieldRefs {
    readonly id: FieldRef<"Username", 'Int'>
    readonly name: FieldRef<"Username", 'String'>
    readonly email: FieldRef<"Username", 'String'>
    readonly password: FieldRef<"Username", 'String'>
    readonly role: FieldRef<"Username", 'Role'>
    readonly twoFACode: FieldRef<"Username", 'String'>
    readonly twoFACodeExpires: FieldRef<"Username", 'DateTime'>
    readonly createdAt: FieldRef<"Username", 'DateTime'>
    readonly updatedAt: FieldRef<"Username", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Username findUnique
   */
  export type UsernameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username findUniqueOrThrow
   */
  export type UsernameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username findFirst
   */
  export type UsernameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username findFirstOrThrow
   */
  export type UsernameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Username to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usernames.
     */
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username findMany
   */
  export type UsernameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter, which Usernames to fetch.
     */
    where?: UsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usernames to fetch.
     */
    orderBy?: UsernameOrderByWithRelationInput | UsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usernames.
     */
    cursor?: UsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usernames.
     */
    skip?: number
    distinct?: UsernameScalarFieldEnum | UsernameScalarFieldEnum[]
  }

  /**
   * Username create
   */
  export type UsernameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The data needed to create a Username.
     */
    data: XOR<UsernameCreateInput, UsernameUncheckedCreateInput>
  }

  /**
   * Username createMany
   */
  export type UsernameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usernames.
     */
    data: UsernameCreateManyInput | UsernameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Username update
   */
  export type UsernameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The data needed to update a Username.
     */
    data: XOR<UsernameUpdateInput, UsernameUncheckedUpdateInput>
    /**
     * Choose, which Username to update.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username updateMany
   */
  export type UsernameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usernames.
     */
    data: XOR<UsernameUpdateManyMutationInput, UsernameUncheckedUpdateManyInput>
    /**
     * Filter which Usernames to update
     */
    where?: UsernameWhereInput
    /**
     * Limit how many Usernames to update.
     */
    limit?: number
  }

  /**
   * Username upsert
   */
  export type UsernameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * The filter to search for the Username to update in case it exists.
     */
    where: UsernameWhereUniqueInput
    /**
     * In case the Username found by the `where` argument doesn't exist, create a new Username with this data.
     */
    create: XOR<UsernameCreateInput, UsernameUncheckedCreateInput>
    /**
     * In case the Username was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsernameUpdateInput, UsernameUncheckedUpdateInput>
  }

  /**
   * Username delete
   */
  export type UsernameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
    /**
     * Filter which Username to delete.
     */
    where: UsernameWhereUniqueInput
  }

  /**
   * Username deleteMany
   */
  export type UsernameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usernames to delete
     */
    where?: UsernameWhereInput
    /**
     * Limit how many Usernames to delete.
     */
    limit?: number
  }

  /**
   * Username without action
   */
  export type UsernameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Username
     */
    select?: UsernameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Username
     */
    omit?: UsernameOmit<ExtArgs> | null
  }


  /**
   * Model Meta_data
   */

  export type AggregateMeta_data = {
    _count: Meta_dataCountAggregateOutputType | null
    _avg: Meta_dataAvgAggregateOutputType | null
    _sum: Meta_dataSumAggregateOutputType | null
    _min: Meta_dataMinAggregateOutputType | null
    _max: Meta_dataMaxAggregateOutputType | null
  }

  export type Meta_dataAvgAggregateOutputType = {
    id: number | null
  }

  export type Meta_dataSumAggregateOutputType = {
    id: number | null
  }

  export type Meta_dataMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    author_url: string | null
    metadataBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Meta_dataMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    author_url: string | null
    metadataBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Meta_dataCountAggregateOutputType = {
    id: number
    title: number
    description: number
    keywords: number
    author_name: number
    author_url: number
    metadataBase: number
    alternates: number
    openGraph_title: number
    openGraph_description: number
    openGraph_url: number
    openGraph_siteName: number
    themeColor: number
    icons_icon: number
    icons_shortcut: number
    icons_apple: number
    other_geo_region: number
    other_geo_placename: number
    other_geo_position: number
    other_ICBM: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Meta_dataAvgAggregateInputType = {
    id?: true
  }

  export type Meta_dataSumAggregateInputType = {
    id?: true
  }

  export type Meta_dataMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    author_url?: true
    metadataBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Meta_dataMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    author_url?: true
    metadataBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Meta_dataCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    author_name?: true
    author_url?: true
    metadataBase?: true
    alternates?: true
    openGraph_title?: true
    openGraph_description?: true
    openGraph_url?: true
    openGraph_siteName?: true
    themeColor?: true
    icons_icon?: true
    icons_shortcut?: true
    icons_apple?: true
    other_geo_region?: true
    other_geo_placename?: true
    other_geo_position?: true
    other_ICBM?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Meta_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta_data to aggregate.
     */
    where?: Meta_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meta_data to fetch.
     */
    orderBy?: Meta_dataOrderByWithRelationInput | Meta_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Meta_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meta_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meta_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meta_data
    **/
    _count?: true | Meta_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meta_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meta_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meta_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meta_dataMaxAggregateInputType
  }

  export type GetMeta_dataAggregateType<T extends Meta_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta_data[P]>
      : GetScalarType<T[P], AggregateMeta_data[P]>
  }




  export type Meta_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Meta_dataWhereInput
    orderBy?: Meta_dataOrderByWithAggregationInput | Meta_dataOrderByWithAggregationInput[]
    by: Meta_dataScalarFieldEnum[] | Meta_dataScalarFieldEnum
    having?: Meta_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meta_dataCountAggregateInputType | true
    _avg?: Meta_dataAvgAggregateInputType
    _sum?: Meta_dataSumAggregateInputType
    _min?: Meta_dataMinAggregateInputType
    _max?: Meta_dataMaxAggregateInputType
  }

  export type Meta_dataGroupByOutputType = {
    id: number
    title: string | null
    description: string | null
    keywords: string | null
    author_name: string | null
    author_url: string | null
    metadataBase: string | null
    alternates: string | null
    openGraph_title: string | null
    openGraph_description: string | null
    openGraph_url: string | null
    openGraph_siteName: string | null
    themeColor: string | null
    icons_icon: string | null
    icons_shortcut: string | null
    icons_apple: string | null
    other_geo_region: string | null
    other_geo_placename: string | null
    other_geo_position: string | null
    other_ICBM: string | null
    createdAt: Date
    updatedAt: Date
    _count: Meta_dataCountAggregateOutputType | null
    _avg: Meta_dataAvgAggregateOutputType | null
    _sum: Meta_dataSumAggregateOutputType | null
    _min: Meta_dataMinAggregateOutputType | null
    _max: Meta_dataMaxAggregateOutputType | null
  }

  type GetMeta_dataGroupByPayload<T extends Meta_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meta_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meta_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meta_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Meta_dataGroupByOutputType[P]>
        }
      >
    >


  export type Meta_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    author_name?: boolean
    author_url?: boolean
    metadataBase?: boolean
    alternates?: boolean
    openGraph_title?: boolean
    openGraph_description?: boolean
    openGraph_url?: boolean
    openGraph_siteName?: boolean
    themeColor?: boolean
    icons_icon?: boolean
    icons_shortcut?: boolean
    icons_apple?: boolean
    other_geo_region?: boolean
    other_geo_placename?: boolean
    other_geo_position?: boolean
    other_ICBM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meta_data"]>



  export type Meta_dataSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    author_name?: boolean
    author_url?: boolean
    metadataBase?: boolean
    alternates?: boolean
    openGraph_title?: boolean
    openGraph_description?: boolean
    openGraph_url?: boolean
    openGraph_siteName?: boolean
    themeColor?: boolean
    icons_icon?: boolean
    icons_shortcut?: boolean
    icons_apple?: boolean
    other_geo_region?: boolean
    other_geo_placename?: boolean
    other_geo_position?: boolean
    other_ICBM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Meta_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "keywords" | "author_name" | "author_url" | "metadataBase" | "alternates" | "openGraph_title" | "openGraph_description" | "openGraph_url" | "openGraph_siteName" | "themeColor" | "icons_icon" | "icons_shortcut" | "icons_apple" | "other_geo_region" | "other_geo_placename" | "other_geo_position" | "other_ICBM" | "createdAt" | "updatedAt", ExtArgs["result"]["meta_data"]>

  export type $Meta_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      description: string | null
      keywords: string | null
      author_name: string | null
      author_url: string | null
      metadataBase: string | null
      alternates: string | null
      openGraph_title: string | null
      openGraph_description: string | null
      openGraph_url: string | null
      openGraph_siteName: string | null
      themeColor: string | null
      icons_icon: string | null
      icons_shortcut: string | null
      icons_apple: string | null
      other_geo_region: string | null
      other_geo_placename: string | null
      other_geo_position: string | null
      other_ICBM: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meta_data"]>
    composites: {}
  }

  type Meta_dataGetPayload<S extends boolean | null | undefined | Meta_dataDefaultArgs> = $Result.GetResult<Prisma.$Meta_dataPayload, S>

  type Meta_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Meta_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meta_dataCountAggregateInputType | true
    }

  export interface Meta_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta_data'], meta: { name: 'Meta_data' } }
    /**
     * Find zero or one Meta_data that matches the filter.
     * @param {Meta_dataFindUniqueArgs} args - Arguments to find a Meta_data
     * @example
     * // Get one Meta_data
     * const meta_data = await prisma.meta_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Meta_dataFindUniqueArgs>(args: SelectSubset<T, Meta_dataFindUniqueArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Meta_dataFindUniqueOrThrowArgs} args - Arguments to find a Meta_data
     * @example
     * // Get one Meta_data
     * const meta_data = await prisma.meta_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Meta_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, Meta_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataFindFirstArgs} args - Arguments to find a Meta_data
     * @example
     * // Get one Meta_data
     * const meta_data = await prisma.meta_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Meta_dataFindFirstArgs>(args?: SelectSubset<T, Meta_dataFindFirstArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataFindFirstOrThrowArgs} args - Arguments to find a Meta_data
     * @example
     * // Get one Meta_data
     * const meta_data = await prisma.meta_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Meta_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, Meta_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meta_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meta_data
     * const meta_data = await prisma.meta_data.findMany()
     * 
     * // Get first 10 Meta_data
     * const meta_data = await prisma.meta_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meta_dataWithIdOnly = await prisma.meta_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Meta_dataFindManyArgs>(args?: SelectSubset<T, Meta_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta_data.
     * @param {Meta_dataCreateArgs} args - Arguments to create a Meta_data.
     * @example
     * // Create one Meta_data
     * const Meta_data = await prisma.meta_data.create({
     *   data: {
     *     // ... data to create a Meta_data
     *   }
     * })
     * 
     */
    create<T extends Meta_dataCreateArgs>(args: SelectSubset<T, Meta_dataCreateArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meta_data.
     * @param {Meta_dataCreateManyArgs} args - Arguments to create many Meta_data.
     * @example
     * // Create many Meta_data
     * const meta_data = await prisma.meta_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Meta_dataCreateManyArgs>(args?: SelectSubset<T, Meta_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meta_data.
     * @param {Meta_dataDeleteArgs} args - Arguments to delete one Meta_data.
     * @example
     * // Delete one Meta_data
     * const Meta_data = await prisma.meta_data.delete({
     *   where: {
     *     // ... filter to delete one Meta_data
     *   }
     * })
     * 
     */
    delete<T extends Meta_dataDeleteArgs>(args: SelectSubset<T, Meta_dataDeleteArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta_data.
     * @param {Meta_dataUpdateArgs} args - Arguments to update one Meta_data.
     * @example
     * // Update one Meta_data
     * const meta_data = await prisma.meta_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Meta_dataUpdateArgs>(args: SelectSubset<T, Meta_dataUpdateArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meta_data.
     * @param {Meta_dataDeleteManyArgs} args - Arguments to filter Meta_data to delete.
     * @example
     * // Delete a few Meta_data
     * const { count } = await prisma.meta_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Meta_dataDeleteManyArgs>(args?: SelectSubset<T, Meta_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meta_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meta_data
     * const meta_data = await prisma.meta_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Meta_dataUpdateManyArgs>(args: SelectSubset<T, Meta_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meta_data.
     * @param {Meta_dataUpsertArgs} args - Arguments to update or create a Meta_data.
     * @example
     * // Update or create a Meta_data
     * const meta_data = await prisma.meta_data.upsert({
     *   create: {
     *     // ... data to create a Meta_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta_data we want to update
     *   }
     * })
     */
    upsert<T extends Meta_dataUpsertArgs>(args: SelectSubset<T, Meta_dataUpsertArgs<ExtArgs>>): Prisma__Meta_dataClient<$Result.GetResult<Prisma.$Meta_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meta_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataCountArgs} args - Arguments to filter Meta_data to count.
     * @example
     * // Count the number of Meta_data
     * const count = await prisma.meta_data.count({
     *   where: {
     *     // ... the filter for the Meta_data we want to count
     *   }
     * })
    **/
    count<T extends Meta_dataCountArgs>(
      args?: Subset<T, Meta_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meta_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meta_dataAggregateArgs>(args: Subset<T, Meta_dataAggregateArgs>): Prisma.PrismaPromise<GetMeta_dataAggregateType<T>>

    /**
     * Group by Meta_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Meta_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Meta_dataGroupByArgs['orderBy'] }
        : { orderBy?: Meta_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Meta_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeta_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta_data model
   */
  readonly fields: Meta_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Meta_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meta_data model
   */
  interface Meta_dataFieldRefs {
    readonly id: FieldRef<"Meta_data", 'Int'>
    readonly title: FieldRef<"Meta_data", 'String'>
    readonly description: FieldRef<"Meta_data", 'String'>
    readonly keywords: FieldRef<"Meta_data", 'String'>
    readonly author_name: FieldRef<"Meta_data", 'String'>
    readonly author_url: FieldRef<"Meta_data", 'String'>
    readonly metadataBase: FieldRef<"Meta_data", 'String'>
    readonly alternates: FieldRef<"Meta_data", 'String'>
    readonly openGraph_title: FieldRef<"Meta_data", 'String'>
    readonly openGraph_description: FieldRef<"Meta_data", 'String'>
    readonly openGraph_url: FieldRef<"Meta_data", 'String'>
    readonly openGraph_siteName: FieldRef<"Meta_data", 'String'>
    readonly themeColor: FieldRef<"Meta_data", 'String'>
    readonly icons_icon: FieldRef<"Meta_data", 'String'>
    readonly icons_shortcut: FieldRef<"Meta_data", 'String'>
    readonly icons_apple: FieldRef<"Meta_data", 'String'>
    readonly other_geo_region: FieldRef<"Meta_data", 'String'>
    readonly other_geo_placename: FieldRef<"Meta_data", 'String'>
    readonly other_geo_position: FieldRef<"Meta_data", 'String'>
    readonly other_ICBM: FieldRef<"Meta_data", 'String'>
    readonly createdAt: FieldRef<"Meta_data", 'DateTime'>
    readonly updatedAt: FieldRef<"Meta_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meta_data findUnique
   */
  export type Meta_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter, which Meta_data to fetch.
     */
    where: Meta_dataWhereUniqueInput
  }

  /**
   * Meta_data findUniqueOrThrow
   */
  export type Meta_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter, which Meta_data to fetch.
     */
    where: Meta_dataWhereUniqueInput
  }

  /**
   * Meta_data findFirst
   */
  export type Meta_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter, which Meta_data to fetch.
     */
    where?: Meta_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meta_data to fetch.
     */
    orderBy?: Meta_dataOrderByWithRelationInput | Meta_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meta_data.
     */
    cursor?: Meta_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meta_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meta_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meta_data.
     */
    distinct?: Meta_dataScalarFieldEnum | Meta_dataScalarFieldEnum[]
  }

  /**
   * Meta_data findFirstOrThrow
   */
  export type Meta_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter, which Meta_data to fetch.
     */
    where?: Meta_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meta_data to fetch.
     */
    orderBy?: Meta_dataOrderByWithRelationInput | Meta_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meta_data.
     */
    cursor?: Meta_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meta_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meta_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meta_data.
     */
    distinct?: Meta_dataScalarFieldEnum | Meta_dataScalarFieldEnum[]
  }

  /**
   * Meta_data findMany
   */
  export type Meta_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter, which Meta_data to fetch.
     */
    where?: Meta_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meta_data to fetch.
     */
    orderBy?: Meta_dataOrderByWithRelationInput | Meta_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meta_data.
     */
    cursor?: Meta_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meta_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meta_data.
     */
    skip?: number
    distinct?: Meta_dataScalarFieldEnum | Meta_dataScalarFieldEnum[]
  }

  /**
   * Meta_data create
   */
  export type Meta_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a Meta_data.
     */
    data: XOR<Meta_dataCreateInput, Meta_dataUncheckedCreateInput>
  }

  /**
   * Meta_data createMany
   */
  export type Meta_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meta_data.
     */
    data: Meta_dataCreateManyInput | Meta_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta_data update
   */
  export type Meta_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a Meta_data.
     */
    data: XOR<Meta_dataUpdateInput, Meta_dataUncheckedUpdateInput>
    /**
     * Choose, which Meta_data to update.
     */
    where: Meta_dataWhereUniqueInput
  }

  /**
   * Meta_data updateMany
   */
  export type Meta_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meta_data.
     */
    data: XOR<Meta_dataUpdateManyMutationInput, Meta_dataUncheckedUpdateManyInput>
    /**
     * Filter which Meta_data to update
     */
    where?: Meta_dataWhereInput
    /**
     * Limit how many Meta_data to update.
     */
    limit?: number
  }

  /**
   * Meta_data upsert
   */
  export type Meta_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the Meta_data to update in case it exists.
     */
    where: Meta_dataWhereUniqueInput
    /**
     * In case the Meta_data found by the `where` argument doesn't exist, create a new Meta_data with this data.
     */
    create: XOR<Meta_dataCreateInput, Meta_dataUncheckedCreateInput>
    /**
     * In case the Meta_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Meta_dataUpdateInput, Meta_dataUncheckedUpdateInput>
  }

  /**
   * Meta_data delete
   */
  export type Meta_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
    /**
     * Filter which Meta_data to delete.
     */
    where: Meta_dataWhereUniqueInput
  }

  /**
   * Meta_data deleteMany
   */
  export type Meta_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta_data to delete
     */
    where?: Meta_dataWhereInput
    /**
     * Limit how many Meta_data to delete.
     */
    limit?: number
  }

  /**
   * Meta_data without action
   */
  export type Meta_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta_data
     */
    select?: Meta_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta_data
     */
    omit?: Meta_dataOmit<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    id: number | null
  }

  export type FaqSumAggregateOutputType = {
    id: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: number | null
    question: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    question: number
    answers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    id?: true
  }

  export type FaqSumAggregateInputType = {
    id?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    question?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: number
    question: string | null
    answers: string | null
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>



  export type FaqSelectScalar = {
    id?: boolean
    question?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answers" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string | null
      answers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'Int'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answers: FieldRef<"Faq", 'String'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    service: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    service: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    service: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    service?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    service: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    service?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      service: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly service: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model My_work
   */

  export type AggregateMy_work = {
    _count: My_workCountAggregateOutputType | null
    _avg: My_workAvgAggregateOutputType | null
    _sum: My_workSumAggregateOutputType | null
    _min: My_workMinAggregateOutputType | null
    _max: My_workMaxAggregateOutputType | null
  }

  export type My_workAvgAggregateOutputType = {
    id: number | null
  }

  export type My_workSumAggregateOutputType = {
    id: number | null
  }

  export type My_workMinAggregateOutputType = {
    id: number | null
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type My_workMaxAggregateOutputType = {
    id: number | null
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type My_workCountAggregateOutputType = {
    id: number
    title: number
    square: number
    quantity: number
    time: number
    success_work: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type My_workAvgAggregateInputType = {
    id?: true
  }

  export type My_workSumAggregateInputType = {
    id?: true
  }

  export type My_workMinAggregateInputType = {
    id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type My_workMaxAggregateInputType = {
    id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type My_workCountAggregateInputType = {
    id?: true
    title?: true
    square?: true
    quantity?: true
    time?: true
    success_work?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type My_workAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_work to aggregate.
     */
    where?: My_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_works to fetch.
     */
    orderBy?: My_workOrderByWithRelationInput | My_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: My_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned My_works
    **/
    _count?: true | My_workCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: My_workAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: My_workSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: My_workMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: My_workMaxAggregateInputType
  }

  export type GetMy_workAggregateType<T extends My_workAggregateArgs> = {
        [P in keyof T & keyof AggregateMy_work]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMy_work[P]>
      : GetScalarType<T[P], AggregateMy_work[P]>
  }




  export type My_workGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_workWhereInput
    orderBy?: My_workOrderByWithAggregationInput | My_workOrderByWithAggregationInput[]
    by: My_workScalarFieldEnum[] | My_workScalarFieldEnum
    having?: My_workScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: My_workCountAggregateInputType | true
    _avg?: My_workAvgAggregateInputType
    _sum?: My_workSumAggregateInputType
    _min?: My_workMinAggregateInputType
    _max?: My_workMaxAggregateInputType
  }

  export type My_workGroupByOutputType = {
    id: number
    title: string | null
    square: string | null
    quantity: string | null
    time: string | null
    success_work: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: My_workCountAggregateOutputType | null
    _avg: My_workAvgAggregateOutputType | null
    _sum: My_workSumAggregateOutputType | null
    _min: My_workMinAggregateOutputType | null
    _max: My_workMaxAggregateOutputType | null
  }

  type GetMy_workGroupByPayload<T extends My_workGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<My_workGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof My_workGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], My_workGroupByOutputType[P]>
            : GetScalarType<T[P], My_workGroupByOutputType[P]>
        }
      >
    >


  export type My_workSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    square?: boolean
    quantity?: boolean
    time?: boolean
    success_work?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["my_work"]>



  export type My_workSelectScalar = {
    id?: boolean
    title?: boolean
    square?: boolean
    quantity?: boolean
    time?: boolean
    success_work?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type My_workOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "square" | "quantity" | "time" | "success_work" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["my_work"]>

  export type $My_workPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "My_work"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      square: string | null
      quantity: string | null
      time: string | null
      success_work: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["my_work"]>
    composites: {}
  }

  type My_workGetPayload<S extends boolean | null | undefined | My_workDefaultArgs> = $Result.GetResult<Prisma.$My_workPayload, S>

  type My_workCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<My_workFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: My_workCountAggregateInputType | true
    }

  export interface My_workDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['My_work'], meta: { name: 'My_work' } }
    /**
     * Find zero or one My_work that matches the filter.
     * @param {My_workFindUniqueArgs} args - Arguments to find a My_work
     * @example
     * // Get one My_work
     * const my_work = await prisma.my_work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends My_workFindUniqueArgs>(args: SelectSubset<T, My_workFindUniqueArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one My_work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {My_workFindUniqueOrThrowArgs} args - Arguments to find a My_work
     * @example
     * // Get one My_work
     * const my_work = await prisma.my_work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends My_workFindUniqueOrThrowArgs>(args: SelectSubset<T, My_workFindUniqueOrThrowArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workFindFirstArgs} args - Arguments to find a My_work
     * @example
     * // Get one My_work
     * const my_work = await prisma.my_work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends My_workFindFirstArgs>(args?: SelectSubset<T, My_workFindFirstArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workFindFirstOrThrowArgs} args - Arguments to find a My_work
     * @example
     * // Get one My_work
     * const my_work = await prisma.my_work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends My_workFindFirstOrThrowArgs>(args?: SelectSubset<T, My_workFindFirstOrThrowArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more My_works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all My_works
     * const my_works = await prisma.my_work.findMany()
     * 
     * // Get first 10 My_works
     * const my_works = await prisma.my_work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const my_workWithIdOnly = await prisma.my_work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends My_workFindManyArgs>(args?: SelectSubset<T, My_workFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a My_work.
     * @param {My_workCreateArgs} args - Arguments to create a My_work.
     * @example
     * // Create one My_work
     * const My_work = await prisma.my_work.create({
     *   data: {
     *     // ... data to create a My_work
     *   }
     * })
     * 
     */
    create<T extends My_workCreateArgs>(args: SelectSubset<T, My_workCreateArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many My_works.
     * @param {My_workCreateManyArgs} args - Arguments to create many My_works.
     * @example
     * // Create many My_works
     * const my_work = await prisma.my_work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends My_workCreateManyArgs>(args?: SelectSubset<T, My_workCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a My_work.
     * @param {My_workDeleteArgs} args - Arguments to delete one My_work.
     * @example
     * // Delete one My_work
     * const My_work = await prisma.my_work.delete({
     *   where: {
     *     // ... filter to delete one My_work
     *   }
     * })
     * 
     */
    delete<T extends My_workDeleteArgs>(args: SelectSubset<T, My_workDeleteArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one My_work.
     * @param {My_workUpdateArgs} args - Arguments to update one My_work.
     * @example
     * // Update one My_work
     * const my_work = await prisma.my_work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends My_workUpdateArgs>(args: SelectSubset<T, My_workUpdateArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more My_works.
     * @param {My_workDeleteManyArgs} args - Arguments to filter My_works to delete.
     * @example
     * // Delete a few My_works
     * const { count } = await prisma.my_work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends My_workDeleteManyArgs>(args?: SelectSubset<T, My_workDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more My_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many My_works
     * const my_work = await prisma.my_work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends My_workUpdateManyArgs>(args: SelectSubset<T, My_workUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one My_work.
     * @param {My_workUpsertArgs} args - Arguments to update or create a My_work.
     * @example
     * // Update or create a My_work
     * const my_work = await prisma.my_work.upsert({
     *   create: {
     *     // ... data to create a My_work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the My_work we want to update
     *   }
     * })
     */
    upsert<T extends My_workUpsertArgs>(args: SelectSubset<T, My_workUpsertArgs<ExtArgs>>): Prisma__My_workClient<$Result.GetResult<Prisma.$My_workPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of My_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workCountArgs} args - Arguments to filter My_works to count.
     * @example
     * // Count the number of My_works
     * const count = await prisma.my_work.count({
     *   where: {
     *     // ... the filter for the My_works we want to count
     *   }
     * })
    **/
    count<T extends My_workCountArgs>(
      args?: Subset<T, My_workCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], My_workCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a My_work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends My_workAggregateArgs>(args: Subset<T, My_workAggregateArgs>): Prisma.PrismaPromise<GetMy_workAggregateType<T>>

    /**
     * Group by My_work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_workGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends My_workGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: My_workGroupByArgs['orderBy'] }
        : { orderBy?: My_workGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, My_workGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMy_workGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the My_work model
   */
  readonly fields: My_workFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for My_work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__My_workClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the My_work model
   */
  interface My_workFieldRefs {
    readonly id: FieldRef<"My_work", 'Int'>
    readonly title: FieldRef<"My_work", 'String'>
    readonly square: FieldRef<"My_work", 'String'>
    readonly quantity: FieldRef<"My_work", 'String'>
    readonly time: FieldRef<"My_work", 'String'>
    readonly success_work: FieldRef<"My_work", 'String'>
    readonly image: FieldRef<"My_work", 'String'>
    readonly createdAt: FieldRef<"My_work", 'DateTime'>
    readonly updatedAt: FieldRef<"My_work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * My_work findUnique
   */
  export type My_workFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter, which My_work to fetch.
     */
    where: My_workWhereUniqueInput
  }

  /**
   * My_work findUniqueOrThrow
   */
  export type My_workFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter, which My_work to fetch.
     */
    where: My_workWhereUniqueInput
  }

  /**
   * My_work findFirst
   */
  export type My_workFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter, which My_work to fetch.
     */
    where?: My_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_works to fetch.
     */
    orderBy?: My_workOrderByWithRelationInput | My_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_works.
     */
    cursor?: My_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_works.
     */
    distinct?: My_workScalarFieldEnum | My_workScalarFieldEnum[]
  }

  /**
   * My_work findFirstOrThrow
   */
  export type My_workFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter, which My_work to fetch.
     */
    where?: My_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_works to fetch.
     */
    orderBy?: My_workOrderByWithRelationInput | My_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_works.
     */
    cursor?: My_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_works.
     */
    distinct?: My_workScalarFieldEnum | My_workScalarFieldEnum[]
  }

  /**
   * My_work findMany
   */
  export type My_workFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter, which My_works to fetch.
     */
    where?: My_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_works to fetch.
     */
    orderBy?: My_workOrderByWithRelationInput | My_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing My_works.
     */
    cursor?: My_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_works.
     */
    skip?: number
    distinct?: My_workScalarFieldEnum | My_workScalarFieldEnum[]
  }

  /**
   * My_work create
   */
  export type My_workCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * The data needed to create a My_work.
     */
    data: XOR<My_workCreateInput, My_workUncheckedCreateInput>
  }

  /**
   * My_work createMany
   */
  export type My_workCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many My_works.
     */
    data: My_workCreateManyInput | My_workCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * My_work update
   */
  export type My_workUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * The data needed to update a My_work.
     */
    data: XOR<My_workUpdateInput, My_workUncheckedUpdateInput>
    /**
     * Choose, which My_work to update.
     */
    where: My_workWhereUniqueInput
  }

  /**
   * My_work updateMany
   */
  export type My_workUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update My_works.
     */
    data: XOR<My_workUpdateManyMutationInput, My_workUncheckedUpdateManyInput>
    /**
     * Filter which My_works to update
     */
    where?: My_workWhereInput
    /**
     * Limit how many My_works to update.
     */
    limit?: number
  }

  /**
   * My_work upsert
   */
  export type My_workUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * The filter to search for the My_work to update in case it exists.
     */
    where: My_workWhereUniqueInput
    /**
     * In case the My_work found by the `where` argument doesn't exist, create a new My_work with this data.
     */
    create: XOR<My_workCreateInput, My_workUncheckedCreateInput>
    /**
     * In case the My_work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<My_workUpdateInput, My_workUncheckedUpdateInput>
  }

  /**
   * My_work delete
   */
  export type My_workDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
    /**
     * Filter which My_work to delete.
     */
    where: My_workWhereUniqueInput
  }

  /**
   * My_work deleteMany
   */
  export type My_workDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_works to delete
     */
    where?: My_workWhereInput
    /**
     * Limit how many My_works to delete.
     */
    limit?: number
  }

  /**
   * My_work without action
   */
  export type My_workDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_work
     */
    select?: My_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_work
     */
    omit?: My_workOmit<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    email: number
    tel: number
    address: number
    whatsapp: number
    telegram: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    email?: true
    tel?: true
    address?: true
    whatsapp?: true
    telegram?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    email: string | null
    tel: string | null
    address: string | null
    whatsapp: string | null
    telegram: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tel?: boolean
    address?: boolean
    whatsapp?: boolean
    telegram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>



  export type ContactsSelectScalar = {
    id?: boolean
    email?: boolean
    tel?: boolean
    address?: boolean
    whatsapp?: boolean
    telegram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "tel" | "address" | "whatsapp" | "telegram" | "createdAt" | "updatedAt", ExtArgs["result"]["contacts"]>

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      tel: string | null
      address: string | null
      whatsapp: string | null
      telegram: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'Int'>
    readonly email: FieldRef<"Contacts", 'String'>
    readonly tel: FieldRef<"Contacts", 'String'>
    readonly address: FieldRef<"Contacts", 'String'>
    readonly whatsapp: FieldRef<"Contacts", 'String'>
    readonly telegram: FieldRef<"Contacts", 'String'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsernameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    twoFACode: 'twoFACode',
    twoFACodeExpires: 'twoFACodeExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsernameScalarFieldEnum = (typeof UsernameScalarFieldEnum)[keyof typeof UsernameScalarFieldEnum]


  export const Meta_dataScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    author_name: 'author_name',
    author_url: 'author_url',
    metadataBase: 'metadataBase',
    alternates: 'alternates',
    openGraph_title: 'openGraph_title',
    openGraph_description: 'openGraph_description',
    openGraph_url: 'openGraph_url',
    openGraph_siteName: 'openGraph_siteName',
    themeColor: 'themeColor',
    icons_icon: 'icons_icon',
    icons_shortcut: 'icons_shortcut',
    icons_apple: 'icons_apple',
    other_geo_region: 'other_geo_region',
    other_geo_placename: 'other_geo_placename',
    other_geo_position: 'other_geo_position',
    other_ICBM: 'other_ICBM',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Meta_dataScalarFieldEnum = (typeof Meta_dataScalarFieldEnum)[keyof typeof Meta_dataScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    service: 'service',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const My_workScalarFieldEnum: {
    id: 'id',
    title: 'title',
    square: 'square',
    quantity: 'quantity',
    time: 'time',
    success_work: 'success_work',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type My_workScalarFieldEnum = (typeof My_workScalarFieldEnum)[keyof typeof My_workScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    tel: 'tel',
    address: 'address',
    whatsapp: 'whatsapp',
    telegram: 'telegram',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsernameOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    twoFACode: 'twoFACode'
  };

  export type UsernameOrderByRelevanceFieldEnum = (typeof UsernameOrderByRelevanceFieldEnum)[keyof typeof UsernameOrderByRelevanceFieldEnum]


  export const Meta_dataOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    author_name: 'author_name',
    author_url: 'author_url',
    metadataBase: 'metadataBase',
    alternates: 'alternates',
    openGraph_title: 'openGraph_title',
    openGraph_description: 'openGraph_description',
    openGraph_url: 'openGraph_url',
    openGraph_siteName: 'openGraph_siteName',
    themeColor: 'themeColor',
    icons_icon: 'icons_icon',
    icons_shortcut: 'icons_shortcut',
    icons_apple: 'icons_apple',
    other_geo_region: 'other_geo_region',
    other_geo_placename: 'other_geo_placename',
    other_geo_position: 'other_geo_position',
    other_ICBM: 'other_ICBM'
  };

  export type Meta_dataOrderByRelevanceFieldEnum = (typeof Meta_dataOrderByRelevanceFieldEnum)[keyof typeof Meta_dataOrderByRelevanceFieldEnum]


  export const FaqOrderByRelevanceFieldEnum: {
    question: 'question',
    answers: 'answers'
  };

  export type FaqOrderByRelevanceFieldEnum = (typeof FaqOrderByRelevanceFieldEnum)[keyof typeof FaqOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    service: 'service',
    description: 'description'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


  export const My_workOrderByRelevanceFieldEnum: {
    title: 'title',
    square: 'square',
    quantity: 'quantity',
    time: 'time',
    success_work: 'success_work',
    image: 'image'
  };

  export type My_workOrderByRelevanceFieldEnum = (typeof My_workOrderByRelevanceFieldEnum)[keyof typeof My_workOrderByRelevanceFieldEnum]


  export const ContactsOrderByRelevanceFieldEnum: {
    email: 'email',
    tel: 'tel',
    address: 'address',
    whatsapp: 'whatsapp',
    telegram: 'telegram'
  };

  export type ContactsOrderByRelevanceFieldEnum = (typeof ContactsOrderByRelevanceFieldEnum)[keyof typeof ContactsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsernameWhereInput = {
    AND?: UsernameWhereInput | UsernameWhereInput[]
    OR?: UsernameWhereInput[]
    NOT?: UsernameWhereInput | UsernameWhereInput[]
    id?: IntFilter<"Username"> | number
    name?: StringFilter<"Username"> | string
    email?: StringFilter<"Username"> | string
    password?: StringFilter<"Username"> | string
    role?: EnumRoleFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableFilter<"Username"> | Date | string | null
    createdAt?: DateTimeFilter<"Username"> | Date | string
    updatedAt?: DateTimeFilter<"Username"> | Date | string
  }

  export type UsernameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrderInput | SortOrder
    twoFACodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UsernameOrderByRelevanceInput
  }

  export type UsernameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsernameWhereInput | UsernameWhereInput[]
    OR?: UsernameWhereInput[]
    NOT?: UsernameWhereInput | UsernameWhereInput[]
    name?: StringFilter<"Username"> | string
    password?: StringFilter<"Username"> | string
    role?: EnumRoleFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableFilter<"Username"> | Date | string | null
    createdAt?: DateTimeFilter<"Username"> | Date | string
    updatedAt?: DateTimeFilter<"Username"> | Date | string
  }, "id" | "email">

  export type UsernameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrderInput | SortOrder
    twoFACodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsernameCountOrderByAggregateInput
    _avg?: UsernameAvgOrderByAggregateInput
    _max?: UsernameMaxOrderByAggregateInput
    _min?: UsernameMinOrderByAggregateInput
    _sum?: UsernameSumOrderByAggregateInput
  }

  export type UsernameScalarWhereWithAggregatesInput = {
    AND?: UsernameScalarWhereWithAggregatesInput | UsernameScalarWhereWithAggregatesInput[]
    OR?: UsernameScalarWhereWithAggregatesInput[]
    NOT?: UsernameScalarWhereWithAggregatesInput | UsernameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Username"> | number
    name?: StringWithAggregatesFilter<"Username"> | string
    email?: StringWithAggregatesFilter<"Username"> | string
    password?: StringWithAggregatesFilter<"Username"> | string
    role?: EnumRoleWithAggregatesFilter<"Username"> | $Enums.Role
    twoFACode?: StringNullableWithAggregatesFilter<"Username"> | string | null
    twoFACodeExpires?: DateTimeNullableWithAggregatesFilter<"Username"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Username"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Username"> | Date | string
  }

  export type Meta_dataWhereInput = {
    AND?: Meta_dataWhereInput | Meta_dataWhereInput[]
    OR?: Meta_dataWhereInput[]
    NOT?: Meta_dataWhereInput | Meta_dataWhereInput[]
    id?: IntFilter<"Meta_data"> | number
    title?: StringNullableFilter<"Meta_data"> | string | null
    description?: StringNullableFilter<"Meta_data"> | string | null
    keywords?: StringNullableFilter<"Meta_data"> | string | null
    author_name?: StringNullableFilter<"Meta_data"> | string | null
    author_url?: StringNullableFilter<"Meta_data"> | string | null
    metadataBase?: StringNullableFilter<"Meta_data"> | string | null
    alternates?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_title?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_description?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_url?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_siteName?: StringNullableFilter<"Meta_data"> | string | null
    themeColor?: StringNullableFilter<"Meta_data"> | string | null
    icons_icon?: StringNullableFilter<"Meta_data"> | string | null
    icons_shortcut?: StringNullableFilter<"Meta_data"> | string | null
    icons_apple?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_region?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_placename?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_position?: StringNullableFilter<"Meta_data"> | string | null
    other_ICBM?: StringNullableFilter<"Meta_data"> | string | null
    createdAt?: DateTimeFilter<"Meta_data"> | Date | string
    updatedAt?: DateTimeFilter<"Meta_data"> | Date | string
  }

  export type Meta_dataOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    author_url?: SortOrderInput | SortOrder
    metadataBase?: SortOrderInput | SortOrder
    alternates?: SortOrderInput | SortOrder
    openGraph_title?: SortOrderInput | SortOrder
    openGraph_description?: SortOrderInput | SortOrder
    openGraph_url?: SortOrderInput | SortOrder
    openGraph_siteName?: SortOrderInput | SortOrder
    themeColor?: SortOrderInput | SortOrder
    icons_icon?: SortOrderInput | SortOrder
    icons_shortcut?: SortOrderInput | SortOrder
    icons_apple?: SortOrderInput | SortOrder
    other_geo_region?: SortOrderInput | SortOrder
    other_geo_placename?: SortOrderInput | SortOrder
    other_geo_position?: SortOrderInput | SortOrder
    other_ICBM?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: Meta_dataOrderByRelevanceInput
  }

  export type Meta_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Meta_dataWhereInput | Meta_dataWhereInput[]
    OR?: Meta_dataWhereInput[]
    NOT?: Meta_dataWhereInput | Meta_dataWhereInput[]
    title?: StringNullableFilter<"Meta_data"> | string | null
    description?: StringNullableFilter<"Meta_data"> | string | null
    keywords?: StringNullableFilter<"Meta_data"> | string | null
    author_name?: StringNullableFilter<"Meta_data"> | string | null
    author_url?: StringNullableFilter<"Meta_data"> | string | null
    metadataBase?: StringNullableFilter<"Meta_data"> | string | null
    alternates?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_title?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_description?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_url?: StringNullableFilter<"Meta_data"> | string | null
    openGraph_siteName?: StringNullableFilter<"Meta_data"> | string | null
    themeColor?: StringNullableFilter<"Meta_data"> | string | null
    icons_icon?: StringNullableFilter<"Meta_data"> | string | null
    icons_shortcut?: StringNullableFilter<"Meta_data"> | string | null
    icons_apple?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_region?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_placename?: StringNullableFilter<"Meta_data"> | string | null
    other_geo_position?: StringNullableFilter<"Meta_data"> | string | null
    other_ICBM?: StringNullableFilter<"Meta_data"> | string | null
    createdAt?: DateTimeFilter<"Meta_data"> | Date | string
    updatedAt?: DateTimeFilter<"Meta_data"> | Date | string
  }, "id">

  export type Meta_dataOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    author_name?: SortOrderInput | SortOrder
    author_url?: SortOrderInput | SortOrder
    metadataBase?: SortOrderInput | SortOrder
    alternates?: SortOrderInput | SortOrder
    openGraph_title?: SortOrderInput | SortOrder
    openGraph_description?: SortOrderInput | SortOrder
    openGraph_url?: SortOrderInput | SortOrder
    openGraph_siteName?: SortOrderInput | SortOrder
    themeColor?: SortOrderInput | SortOrder
    icons_icon?: SortOrderInput | SortOrder
    icons_shortcut?: SortOrderInput | SortOrder
    icons_apple?: SortOrderInput | SortOrder
    other_geo_region?: SortOrderInput | SortOrder
    other_geo_placename?: SortOrderInput | SortOrder
    other_geo_position?: SortOrderInput | SortOrder
    other_ICBM?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Meta_dataCountOrderByAggregateInput
    _avg?: Meta_dataAvgOrderByAggregateInput
    _max?: Meta_dataMaxOrderByAggregateInput
    _min?: Meta_dataMinOrderByAggregateInput
    _sum?: Meta_dataSumOrderByAggregateInput
  }

  export type Meta_dataScalarWhereWithAggregatesInput = {
    AND?: Meta_dataScalarWhereWithAggregatesInput | Meta_dataScalarWhereWithAggregatesInput[]
    OR?: Meta_dataScalarWhereWithAggregatesInput[]
    NOT?: Meta_dataScalarWhereWithAggregatesInput | Meta_dataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meta_data"> | number
    title?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    description?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    author_name?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    author_url?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    metadataBase?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    alternates?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    openGraph_title?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    openGraph_description?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    openGraph_url?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    openGraph_siteName?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    themeColor?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    icons_icon?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    icons_shortcut?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    icons_apple?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    other_geo_region?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    other_geo_placename?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    other_geo_position?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    other_ICBM?: StringNullableWithAggregatesFilter<"Meta_data"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meta_data"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meta_data"> | Date | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: IntFilter<"Faq"> | number
    question?: StringNullableFilter<"Faq"> | string | null
    answers?: StringNullableFilter<"Faq"> | string | null
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FaqOrderByRelevanceInput
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    question?: StringNullableFilter<"Faq"> | string | null
    answers?: StringNullableFilter<"Faq"> | string | null
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faq"> | number
    question?: StringNullableWithAggregatesFilter<"Faq"> | string | null
    answers?: StringNullableWithAggregatesFilter<"Faq"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    service?: StringNullableFilter<"Service"> | string | null
    description?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    service?: StringNullableFilter<"Service"> | string | null
    description?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    service?: StringNullableWithAggregatesFilter<"Service"> | string | null
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type My_workWhereInput = {
    AND?: My_workWhereInput | My_workWhereInput[]
    OR?: My_workWhereInput[]
    NOT?: My_workWhereInput | My_workWhereInput[]
    id?: IntFilter<"My_work"> | number
    title?: StringNullableFilter<"My_work"> | string | null
    square?: StringNullableFilter<"My_work"> | string | null
    quantity?: StringNullableFilter<"My_work"> | string | null
    time?: StringNullableFilter<"My_work"> | string | null
    success_work?: StringNullableFilter<"My_work"> | string | null
    image?: StringNullableFilter<"My_work"> | string | null
    createdAt?: DateTimeFilter<"My_work"> | Date | string
    updatedAt?: DateTimeFilter<"My_work"> | Date | string
  }

  export type My_workOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    square?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    success_work?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: My_workOrderByRelevanceInput
  }

  export type My_workWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: My_workWhereInput | My_workWhereInput[]
    OR?: My_workWhereInput[]
    NOT?: My_workWhereInput | My_workWhereInput[]
    title?: StringNullableFilter<"My_work"> | string | null
    square?: StringNullableFilter<"My_work"> | string | null
    quantity?: StringNullableFilter<"My_work"> | string | null
    time?: StringNullableFilter<"My_work"> | string | null
    success_work?: StringNullableFilter<"My_work"> | string | null
    image?: StringNullableFilter<"My_work"> | string | null
    createdAt?: DateTimeFilter<"My_work"> | Date | string
    updatedAt?: DateTimeFilter<"My_work"> | Date | string
  }, "id">

  export type My_workOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    square?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    success_work?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: My_workCountOrderByAggregateInput
    _avg?: My_workAvgOrderByAggregateInput
    _max?: My_workMaxOrderByAggregateInput
    _min?: My_workMinOrderByAggregateInput
    _sum?: My_workSumOrderByAggregateInput
  }

  export type My_workScalarWhereWithAggregatesInput = {
    AND?: My_workScalarWhereWithAggregatesInput | My_workScalarWhereWithAggregatesInput[]
    OR?: My_workScalarWhereWithAggregatesInput[]
    NOT?: My_workScalarWhereWithAggregatesInput | My_workScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"My_work"> | number
    title?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    square?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    quantity?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    time?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    success_work?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    image?: StringNullableWithAggregatesFilter<"My_work"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"My_work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"My_work"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: IntFilter<"Contacts"> | number
    email?: StringNullableFilter<"Contacts"> | string | null
    tel?: StringNullableFilter<"Contacts"> | string | null
    address?: StringNullableFilter<"Contacts"> | string | null
    whatsapp?: StringNullableFilter<"Contacts"> | string | null
    telegram?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ContactsOrderByRelevanceInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    email?: StringNullableFilter<"Contacts"> | string | null
    tel?: StringNullableFilter<"Contacts"> | string | null
    address?: StringNullableFilter<"Contacts"> | string | null
    whatsapp?: StringNullableFilter<"Contacts"> | string | null
    telegram?: StringNullableFilter<"Contacts"> | string | null
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }, "id">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _avg?: ContactsAvgOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
    _sum?: ContactsSumOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacts"> | number
    email?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    tel?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    address?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"Contacts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type UsernameCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    twoFACode?: string | null
    twoFACodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsernameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsernameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    twoFACode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFACodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meta_dataCreateInput = {
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    author_url?: string | null
    metadataBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Meta_dataUncheckedCreateInput = {
    id?: number
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    author_url?: string | null
    metadataBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Meta_dataUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadataBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meta_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadataBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meta_dataCreateManyInput = {
    id?: number
    title?: string | null
    description?: string | null
    keywords?: string | null
    author_name?: string | null
    author_url?: string | null
    metadataBase?: string | null
    alternates?: string | null
    openGraph_title?: string | null
    openGraph_description?: string | null
    openGraph_url?: string | null
    openGraph_siteName?: string | null
    themeColor?: string | null
    icons_icon?: string | null
    icons_shortcut?: string | null
    icons_apple?: string | null
    other_geo_region?: string | null
    other_geo_placename?: string | null
    other_geo_position?: string | null
    other_ICBM?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Meta_dataUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadataBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Meta_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    metadataBase?: NullableStringFieldUpdateOperationsInput | string | null
    alternates?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_title?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_description?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_url?: NullableStringFieldUpdateOperationsInput | string | null
    openGraph_siteName?: NullableStringFieldUpdateOperationsInput | string | null
    themeColor?: NullableStringFieldUpdateOperationsInput | string | null
    icons_icon?: NullableStringFieldUpdateOperationsInput | string | null
    icons_shortcut?: NullableStringFieldUpdateOperationsInput | string | null
    icons_apple?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_region?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_placename?: NullableStringFieldUpdateOperationsInput | string | null
    other_geo_position?: NullableStringFieldUpdateOperationsInput | string | null
    other_ICBM?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateInput = {
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateInput = {
    id?: number
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: number
    question?: string | null
    answers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateInput = {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: number
    service?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_workCreateInput = {
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_workUncheckedCreateInput = {
    id?: number
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_workUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_workUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_workCreateManyInput = {
    id?: number
    title?: string | null
    square?: string | null
    quantity?: string | null
    time?: string | null
    success_work?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type My_workUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type My_workUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    square?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    success_work?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUncheckedCreateInput = {
    id?: number
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyInput = {
    id?: number
    email?: string | null
    tel?: string | null
    address?: string | null
    whatsapp?: string | null
    telegram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsernameOrderByRelevanceInput = {
    fields: UsernameOrderByRelevanceFieldEnum | UsernameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsernameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsernameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    twoFACode?: SortOrder
    twoFACodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsernameSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Meta_dataOrderByRelevanceInput = {
    fields: Meta_dataOrderByRelevanceFieldEnum | Meta_dataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Meta_dataCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    metadataBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Meta_dataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Meta_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    metadataBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Meta_dataMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    metadataBase?: SortOrder
    alternates?: SortOrder
    openGraph_title?: SortOrder
    openGraph_description?: SortOrder
    openGraph_url?: SortOrder
    openGraph_siteName?: SortOrder
    themeColor?: SortOrder
    icons_icon?: SortOrder
    icons_shortcut?: SortOrder
    icons_apple?: SortOrder
    other_geo_region?: SortOrder
    other_geo_placename?: SortOrder
    other_geo_position?: SortOrder
    other_ICBM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Meta_dataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaqOrderByRelevanceInput = {
    fields: FaqOrderByRelevanceFieldEnum | FaqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type My_workOrderByRelevanceInput = {
    fields: My_workOrderByRelevanceFieldEnum | My_workOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type My_workCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type My_workAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type My_workMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type My_workMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    square?: SortOrder
    quantity?: SortOrder
    time?: SortOrder
    success_work?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type My_workSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactsOrderByRelevanceInput = {
    fields: ContactsOrderByRelevanceFieldEnum | ContactsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    telegram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}