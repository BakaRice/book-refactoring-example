
# 范例：包含条件逻辑的移动

- before

```js

let result;
if (availableResources.length === 0) {
    result = createResource();
    allocateResources.push(result);
} else {
    result = availableResources.pop();
    allocateResources.push(result);
}
return result;
```

- after

```js

let result;
if (availableResources.length === 0) {
    result = createResource();
} else {
    result = availableResources.pop();
}
allocateResources.push(result);
return result;
```
