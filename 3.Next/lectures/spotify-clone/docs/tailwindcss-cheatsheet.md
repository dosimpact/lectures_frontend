

# tailwind css cheat-sheet 

- [tailwind css cheat-sheet](#tailwind-css-cheat-sheet)
  - [twMerge](#twmerge)
  - [반응형 UI만드는 방법](#반응형-ui만드는-방법)
  - [flex](#flex)
  - [etc](#etc)


## twMerge

```js
# import { twMerge } from "tailwind-merge";
className={twMerge(``,active && "text-white")}
```


## 반응형 UI만드는 방법  

```js
# md:hidden : 모바일의 경우에는 숨길수 있는 기능  

# PC에서 보여주다가, mobile의 경우 숨긴다.
className="flex md:hidden gap-x-2 items-center"

# mobile 보여주다가, pc 숨긴다.
className="hidden md:flex gap-x-2 items-center"

```

## flex

```js
# flex, justify-content(main-axis), align-items(cross-axis)
className="flex flex-col gap-y-4"

# main-axis(justify)
className="flex justify-between"

# cross-axios(items)
className="flex flex-row items-center gap-x"

# flex:1 1 0%
className="flex flex-1"

```


## etc

```js
---width, heigth, padding, margin
className="h-auto w-full py-1"
className="px-5 py-4"

---color, font-size, font-weight, background
className="text-green-500"
className="text-md text-neutral-400 font-medium cursor-pointer"
className="bg-green-500 text-black font-bold"

---border, border-round
className="rounded-full border border-transparent"
className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"

---transition, :hover, :disabled
className="hover:text-white transition"
className="disabled:cursor-not-allowed disabled:opacity-50"

---overflow
# 평소에는 스크롤이 없다가, 오버플로 발생시 스크롤이 나온다.
className="overflow-y-auto"

--- backdrop-filter
# backdrop-filter: blur(10px);
# position: absolute; inset: 10px 20px 30px 40px;
className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"



---
- group 이라는 classname
  - 부모 선택자 (group), 부모 요소에 hover할 떄 자식요소들이 반응할 수 있다.  


    <Link
      href={href}
      className={twMerge(
        `flex flex-row items-center gap-x-4 
      h-auto w-full py-1 
      text-md text-neutral-400 font-medium cursor-pointer
      hover:text-white transition`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="w-100 truncate">{label}</p>
    </Link>

```
