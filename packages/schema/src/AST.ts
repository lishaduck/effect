/**
 * @since 1.0.0
 */

import * as Order from "@fp-ts/core/typeclass/Order"
import { pipe } from "@fp-ts/data/Function"
import * as Number from "@fp-ts/data/Number"
import { isNumber } from "@fp-ts/data/Number"
import type { Option } from "@fp-ts/data/Option"
import * as O from "@fp-ts/data/Option"
import type { Predicate } from "@fp-ts/data/Predicate"
import * as RA from "@fp-ts/data/ReadonlyArray"
import { isString } from "@fp-ts/data/String"

/**
 * @category model
 * @since 1.0.0
 */
export type AST =
  | TypeAlias
  | LiteralType
  | UniqueSymbol
  | UndefinedKeyword
  | VoidKeyword
  | NeverKeyword
  | UnknownKeyword
  | AnyKeyword
  | StringKeyword
  | NumberKeyword
  | BooleanKeyword
  | BigIntKeyword
  | SymbolKeyword
  | ObjectKeyword
  | Tuple
  | Struct
  | Union
  | Lazy
  | Enums
  | Refinement
  | TemplateLiteral

/**
 * @since 1.0.0
 */
export interface Annotated {
  readonly annotations: Record<string | symbol, unknown>
}

/**
 * @category model
 * @since 1.0.0
 */
export interface TypeAlias extends Annotated {
  readonly _tag: "TypeAlias"
  readonly typeParameters: ReadonlyArray<AST>
  readonly type: AST
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const typeAlias = (
  typeParameters: ReadonlyArray<AST>,
  type: AST,
  annotations: Annotated["annotations"] = {}
): TypeAlias => ({ _tag: "TypeAlias", typeParameters, type, annotations })

/**
 * @category guards
 * @since 1.0.0
 */
export const isTypeAlias = (ast: AST): ast is TypeAlias => ast._tag === "TypeAlias"

/**
 * @since 1.0.0
 */
export type Literal = string | number | boolean | null | bigint

/**
 * @category model
 * @since 1.0.0
 */
export interface LiteralType {
  readonly _tag: "LiteralType"
  readonly literal: Literal
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const literalType = (
  literal: Literal
): LiteralType => ({ _tag: "LiteralType", literal })

/**
 * @category guards
 * @since 1.0.0
 */
export const isLiteralType = (ast: AST): ast is LiteralType => ast._tag === "LiteralType"

/**
 * @category model
 * @since 1.0.0
 */
export interface UniqueSymbol extends Annotated {
  readonly _tag: "UniqueSymbol"
  readonly symbol: symbol
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const uniqueSymbol = (
  symbol: symbol,
  annotations: Annotated["annotations"] = {}
): UniqueSymbol => ({ _tag: "UniqueSymbol", symbol, annotations })

/**
 * @category guards
 * @since 1.0.0
 */
export const isUniqueSymbol = (ast: AST): ast is UniqueSymbol => ast._tag === "UniqueSymbol"

/**
 * @category model
 * @since 1.0.0
 */
export interface UndefinedKeyword {
  readonly _tag: "UndefinedKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const undefinedKeyword: UndefinedKeyword = { _tag: "UndefinedKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface VoidKeyword {
  readonly _tag: "VoidKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const voidKeyword: VoidKeyword = { _tag: "VoidKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface NeverKeyword {
  readonly _tag: "NeverKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const neverKeyword: NeverKeyword = { _tag: "NeverKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface UnknownKeyword {
  readonly _tag: "UnknownKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const unknownKeyword: UnknownKeyword = { _tag: "UnknownKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface AnyKeyword {
  readonly _tag: "AnyKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const anyKeyword: AnyKeyword = { _tag: "AnyKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface StringKeyword {
  readonly _tag: "StringKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const stringKeyword: StringKeyword = { _tag: "StringKeyword" }

/**
 * @category guards
 * @since 1.0.0
 */
export const isStringKeyword = (ast: AST): ast is StringKeyword => ast._tag === "StringKeyword"

/**
 * @category model
 * @since 1.0.0
 */
export interface NumberKeyword {
  readonly _tag: "NumberKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const numberKeyword: NumberKeyword = { _tag: "NumberKeyword" }

/**
 * @category guards
 * @since 1.0.0
 */
export const isNumberKeyword = (ast: AST): ast is NumberKeyword => ast._tag === "NumberKeyword"

/**
 * @category model
 * @since 1.0.0
 */
export interface BooleanKeyword {
  readonly _tag: "BooleanKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const booleanKeyword: BooleanKeyword = { _tag: "BooleanKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface BigIntKeyword {
  readonly _tag: "BigIntKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const bigIntKeyword: BigIntKeyword = { _tag: "BigIntKeyword" }

/**
 * @category model
 * @since 1.0.0
 */
export interface SymbolKeyword {
  readonly _tag: "SymbolKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const symbolKeyword: SymbolKeyword = { _tag: "SymbolKeyword" }

/**
 * @category guards
 * @since 1.0.0
 */
export const isSymbolKeyword = (ast: AST): ast is SymbolKeyword => ast._tag === "SymbolKeyword"

/**
 * @category model
 * @since 1.0.0
 */
export interface ObjectKeyword {
  readonly _tag: "ObjectKeyword"
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const objectKeyword: ObjectKeyword = { _tag: "ObjectKeyword" }

/**
 * @since 1.0.0
 */
export interface Element {
  readonly type: AST
  readonly isOptional: boolean
}

/**
 * @since 1.0.0
 */
export const element = (
  type: AST,
  isOptional: boolean
): Element => ({ type, isOptional })

/**
 * @category model
 * @since 1.0.0
 */
export interface Tuple {
  readonly _tag: "Tuple"
  readonly elements: ReadonlyArray<Element>
  readonly rest: Option<RA.NonEmptyReadonlyArray<AST>>
  readonly isReadonly: boolean
  readonly allowUnexpected: boolean
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const tuple = (
  elements: ReadonlyArray<Element>,
  rest: Option<RA.NonEmptyReadonlyArray<AST>>,
  isReadonly: boolean,
  allowUnexpected = false
): Tuple => ({ _tag: "Tuple", elements, rest, isReadonly, allowUnexpected })

/**
 * @category guards
 * @since 1.0.0
 */
export const isTuple = (ast: AST): ast is Tuple => ast._tag === "Tuple"

/**
 * @since 1.0.0
 */
export interface Field extends Annotated {
  readonly name: PropertyKey
  readonly type: AST
  readonly isOptional: boolean
  readonly isReadonly: boolean
}

/**
 * @since 1.0.0
 */
export const field = (
  name: PropertyKey,
  type: AST,
  isOptional: boolean,
  isReadonly: boolean,
  annotations: Annotated["annotations"] = {}
): Field => ({ name, type, isOptional, isReadonly, annotations })

/**
 * @since 1.0.0
 */
export interface IndexSignature {
  readonly parameter: StringKeyword | SymbolKeyword | TemplateLiteral
  readonly type: AST
  readonly isReadonly: boolean
}

/**
 * @since 1.0.0
 */
export const indexSignature = (
  parameter: StringKeyword | SymbolKeyword | TemplateLiteral,
  type: AST,
  isReadonly: boolean
): IndexSignature => ({ parameter, type, isReadonly })

/**
 * @category model
 * @since 1.0.0
 */
export interface Struct {
  readonly _tag: "Struct"
  readonly fields: ReadonlyArray<Field>
  readonly indexSignatures: ReadonlyArray<IndexSignature>
  readonly allowUnexpected: boolean
}

const getCardinality = (ast: AST): number => {
  switch (ast._tag) {
    case "TypeAlias":
      return getCardinality(ast.type)
    case "NeverKeyword":
      return 0
    case "LiteralType":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "UniqueSymbol":
      return 1
    case "BooleanKeyword":
      return 2
    case "StringKeyword":
    case "NumberKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3
    case "ObjectKeyword":
      return 4
    case "UnknownKeyword":
    case "AnyKeyword":
      return 6
    case "Refinement":
      return getCardinality(ast.from)
    default:
      return 5
  }
}

const sortByCardinalityAsc = RA.sort(
  pipe(Number.Order, Order.contramap(({ type }: { readonly type: AST }) => getCardinality(type)))
)

/**
 * @category constructors
 * @since 1.0.0
 */
export const struct = (
  fields: ReadonlyArray<Field>,
  indexSignatures: ReadonlyArray<IndexSignature>,
  allowUnexpected = false
): Struct => ({
  _tag: "Struct",
  fields: sortByCardinalityAsc(fields),
  indexSignatures: sortByCardinalityAsc(indexSignatures),
  allowUnexpected
})

/**
 * @category guards
 * @since 1.0.0
 */
export const isStruct = (ast: AST): ast is Struct => ast._tag === "Struct"

/**
 * @category model
 * @since 1.0.0
 */
export interface Union {
  readonly _tag: "Union"
  readonly types: readonly [AST, AST, ...Array<AST>]
}

const getWeight = (ast: AST): number => {
  switch (ast._tag) {
    case "TypeAlias":
      return getWeight(ast.type)
    case "Tuple":
      return ast.elements.length + (O.isSome(ast.rest) ? 1 : 0)
    case "Struct":
      return ast.fields.length + ast.indexSignatures.length
    case "Union":
      return ast.types.reduce((n, member) => n + getWeight(member), 0)
    case "Lazy":
      return 10
    default:
      return 0
  }
}

const sortByWeightDesc = RA.sort(
  Order.reverse(pipe(Number.Order, Order.contramap(getWeight)))
)

const unify = (candidates: ReadonlyArray<AST>): ReadonlyArray<AST> => {
  let out = RA.uniq(pipe(
    candidates,
    RA.flatMap((ast: AST): ReadonlyArray<AST> => isUnion(ast) ? ast.types : [ast])
  ))
  if (out.some(isStringKeyword)) {
    out = out.filter((m) => !(isLiteralType(m) && typeof m.literal === "string"))
  }
  if (out.some(isNumberKeyword)) {
    out = out.filter((m) => !(isLiteralType(m) && typeof m.literal === "number"))
  }
  if (out.some(isSymbolKeyword)) {
    out = out.filter((m) => !isUniqueSymbol(m))
  }
  return out
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const union = (
  candidates: ReadonlyArray<AST>
): AST => {
  const types = unify(candidates)
  switch (types.length) {
    case 0:
      return neverKeyword
    case 1:
      return types[0]
    default: {
      // @ts-expect-error (TypeScript doesn't know that `types` has >= 2 elements after sorting)
      return { _tag: "Union", types: sortByWeightDesc(types) }
    }
  }
}

/**
 * @category guards
 * @since 1.0.0
 */
export const isUnion = (ast: AST): ast is Union => ast._tag === "Union"

/**
 * @category model
 * @since 1.0.0
 */
export interface Lazy {
  readonly _tag: "Lazy"
  readonly f: () => AST
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const lazy = (f: () => AST): Lazy => ({ _tag: "Lazy", f })

/**
 * @category guards
 * @since 1.0.0
 */
export const isLazy = (ast: AST): ast is Lazy => ast._tag === "Lazy"

/**
 * @category model
 * @since 1.0.0
 */
export interface Enums extends Annotated {
  readonly _tag: "Enums"
  readonly enums: ReadonlyArray<readonly [string, string | number]>
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const enums = (
  enums: ReadonlyArray<readonly [string, string | number]>,
  annotations: Annotated["annotations"] = {}
): Enums => ({ _tag: "Enums", enums, annotations })

/**
 * @category model
 * @since 1.0.0
 */
export interface Refinement {
  readonly _tag: "Refinement"
  readonly from: AST
  readonly refinement: Predicate<any>
  readonly meta: unknown
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const refinement = (
  from: AST,
  refinement: Predicate<any>,
  meta: unknown
): Refinement => ({ _tag: "Refinement", from, refinement, meta })

/**
 * @since 1.0.0
 */
export interface TemplateLiteralSpan {
  readonly type: StringKeyword
  readonly literal: string
}

/**
 * @category model
 * @since 1.0.0
 */
export interface TemplateLiteral {
  readonly _tag: "TemplateLiteral"
  readonly head: string
  readonly spans: RA.NonEmptyReadonlyArray<TemplateLiteralSpan>
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const templateLiteral = (
  head: string,
  spans: ReadonlyArray<TemplateLiteralSpan>
): TemplateLiteral | LiteralType =>
  RA.isNonEmpty(spans) ? { _tag: "TemplateLiteral", head, spans } : literalType(head)

/**
 * @category guards
 * @since 1.0.0
 */
export const isTemplateLiteral = (ast: AST): ast is TemplateLiteral =>
  ast._tag === "TemplateLiteral"

/**
 * @since 1.0.0
 */
export const appendRestElement = (
  ast: Tuple,
  restElement: AST
): Tuple => {
  if (O.isSome(ast.rest)) {
    // example: `type A = [...string[], ...number[]]` is illegal
    throw new Error("A rest element cannot follow another rest element. ts(1265)")
  }
  return tuple(ast.elements, O.some([restElement]), ast.isReadonly)
}

/**
 * @since 1.0.0
 */
export const appendElement = (
  ast: Tuple,
  newElement: Element
): Tuple => {
  if (ast.elements.some((e) => e.isOptional) && !newElement.isOptional) {
    throw new Error("A required element cannot follow an optional element. ts(1257)")
  }
  return pipe(
    ast.rest,
    O.match(
      () => tuple([...ast.elements, newElement], O.none, ast.isReadonly),
      (rest) => {
        if (newElement.isOptional) {
          throw new Error("An optional element cannot follow a rest element. ts(1266)")
        }
        return tuple(ast.elements, O.some([...rest, newElement.type]), ast.isReadonly)
      }
    )
  )
}

const _keyof = (ast: AST): ReadonlyArray<AST> => {
  switch (ast._tag) {
    case "TypeAlias":
      return _keyof(ast.type)
    case "NeverKeyword":
    case "AnyKeyword":
      return [stringKeyword, numberKeyword, symbolKeyword]
    case "Struct":
      return ast.fields.map((f): AST =>
        typeof f.name === "symbol" ? uniqueSymbol(f.name) : literalType(f.name)
      ).concat(ast.indexSignatures.map((is) => is.parameter))
    case "Union": {
      let out: ReadonlyArray<AST> = _keyof(ast.types[0])
      for (let i = 1; i < ast.types.length; i++) {
        out = RA.intersection(_keyof(ast.types[i]))(out)
      }
      return out
    }
    case "Lazy":
      return _keyof(ast.f())
    case "Refinement":
      return _keyof(ast.from)
    case "LiteralType":
    case "StringKeyword":
    case "TemplateLiteral":
    case "Tuple":
      throw new Error("cannot compute `keyof`")
    default:
      return [neverKeyword]
  }
}

/**
 * @since 1.0.0
 */
export const keyof = (ast: AST): AST => union(_keyof(ast))

/**
 * @since 1.0.0
 */
export const record = (key: AST, value: AST, isReadonly: boolean): Struct => {
  const fields: Array<Field> = []
  const indexSignatures: Array<IndexSignature> = []
  const go = (key: AST): void => {
    switch (key._tag) {
      case "NeverKeyword":
        break
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral": {
        indexSignatures.push(indexSignature(key, value, isReadonly))
        break
      }
      case "LiteralType":
        if (isString(key.literal) || isNumber(key.literal)) {
          fields.push(field(key.literal, value, false, isReadonly))
        }
        break
      case "UniqueSymbol":
        fields.push(field(key.symbol, value, false, isReadonly))
        break
      case "Union":
        key.types.forEach(go)
        break
      case "Refinement":
        throw new Error("cannot handle refinements in `record`")
      default:
        throw new Error(
          `key does not satisfy the constraint 'string | symbol'`
        )
    }
  }
  go(key)
  return struct(fields, indexSignatures)
}

/**
 * @since 1.0.0
 */
export const pick = (ast: AST, keys: ReadonlyArray<PropertyKey>): Struct => {
  return struct(getFields(ast).filter((field) => keys.includes(field.name)), [])
}

/**
 * @since 1.0.0
 */
export const omit = (ast: AST, keys: ReadonlyArray<PropertyKey>): Struct => {
  return struct(getFields(ast).filter((field) => !keys.includes(field.name)), [])
}

/** @internal */
export const propertyKeys = (ast: AST): ReadonlyArray<PropertyKey> => {
  switch (ast._tag) {
    case "TypeAlias":
      return propertyKeys(ast.type)
    case "Tuple":
      return ast.elements.map((_, i) => String(i))
    case "Struct":
      return ast.fields.map((field) => field.name)
    case "Union": {
      let out: ReadonlyArray<PropertyKey> = propertyKeys(ast.types[0])
      for (let i = 1; i < ast.types.length; i++) {
        out = RA.intersection(propertyKeys(ast.types[i]))(out)
      }
      return out
    }
    case "Lazy":
      return propertyKeys(ast.f())
    case "Refinement":
      return propertyKeys(ast.from)
    default:
      return []
  }
}

/**
 * @since 1.0.0
 */
export const getFields = (
  ast: AST
): ReadonlyArray<Field> => {
  switch (ast._tag) {
    case "TypeAlias":
      return getFields(ast.type)
    case "Tuple":
      return ast.elements.map((element, i) =>
        field(String(i), element.type, element.isOptional, ast.isReadonly)
      )
    case "Struct":
      return ast.fields
    case "Union": {
      const fields = pipe(ast.types, RA.flatMap(getFields))
      return propertyKeys(ast).map((key) => {
        let isOptional = false
        let isReadonly = false
        const type = union(
          fields.filter((field) => field.name === key).map((field) => {
            if (field.isReadonly) {
              isReadonly = true
            }
            if (field.isOptional) {
              isOptional = true
            }
            return field.type
          })
        )
        return field(key, type, isOptional, isReadonly)
      })
    }
    case "Lazy":
      return getFields(ast.f())
    case "Refinement":
      return getFields(ast.from)
    default:
      return []
  }
}

/**
 * @since 1.0.0
 */
export const partial = (ast: AST): AST => {
  switch (ast._tag) {
    case "TypeAlias":
      return partial(ast.type)
    case "Tuple":
      return tuple(
        ast.elements.map((e) => element(e.type, true)),
        pipe(
          ast.rest,
          O.map((rest) => [union([...rest, undefinedKeyword])])
        ),
        ast.isReadonly
      )
    case "Struct":
      return struct(
        ast.fields.map((f) => field(f.name, f.type, true, f.isReadonly, f.annotations)),
        ast.indexSignatures
      )
    case "Union":
      return union(ast.types.map((member) => partial(member)))
    case "Lazy":
      return lazy(() => partial(ast.f()))
    case "Refinement":
      return partial(ast.from)
    default:
      return ast
  }
}
