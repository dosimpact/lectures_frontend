## 7

### 1. useMemo

- 값의 변화가 없다면 리랜더링 방지

```js
<table>
  {Array(tableData.length)
    .fill(null)
    .map((tr, i) =>
      useMemo(
        () => (
          <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ),
        [tableData[i]]
      )
    )}
</table>
```

### 2. 컴포넌트를 감싸는, React.momo

```js

const Tr: FunctionComponent<Props> = ({ rowData, rowIndex, dispatch }) => {

  const ref = useRef<[string[]?, Dispatch<any>?, number?]>([]);
  useEffect(() => {
    console.log(
      rowData === ref.current[0],
      dispatch === ref.current[1],
      rowIndex === ref.current[2]
    );
    ref.current = [rowData, dispatch, rowIndex];
  }, [rowData, dispatch, rowIndex]);

  return (
    <tr>
      {Array(rowData.length)
        .fill(null)
        .map((td, i) =>
          useMemo(
            () => (
              <Td
                key={i}
                dispatch={dispatch}
                rowIndex={rowIndex}
                cellIndex={i}
                cellData={rowData[i]}
              >
                {""}
              </Td>
            ),
            [rowData[i]]
          )
        )}
    </tr>
  );
};

export default memo(Tr);
```

- ReactNode는 리액트 컴포넌트 중 return 부분 JSX 덩어리
- ReactNode -- ReactChild -- ReactFragment -- ReactElement 에서 key,props,type 을 볼 수 있다.

- JSXElement 는 div,td, 등

```js

    type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

    type ReactText = string | number;
    type ReactChild = ReactElement | ReactText;

    interface ReactNodeArray extends Array<ReactNode> {}
    type ReactFragment = {} | ReactNodeArray;

---


interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }

---

    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P>;
        contextTypes?: ValidationMap<any>;
        defaultProps?: Partial<P>;
        displayName?: string;
    }

---
// a태그 등등 IntrinsicElements에 정의
        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ...}
---
// <div>의 id 속성 class 속성 등등 HTMLAttributes 에 정의
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean;
        defaultValue?: string | number | ReadonlyArray<string>;
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;
        ...
    }
```

## 8

### 원래 우클릭은 contextMenu가 나온다.
