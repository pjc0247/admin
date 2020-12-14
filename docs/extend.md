Implement Your Own Table/Detail/Creation Views
====

Sometimes, you may not satisfied with default pages. <br />
In this case, you can ~

Useful Components
----

### DataOperation
```tsx
<DataOperation
  operationKind={DataOperationKind.Delete
>
  <Button>
    Delete
  </Button>
</DataOperation>
```

### Property Editor

```tsx
<PropertyEditor
  model="User",
  name="role"
  value={value}
  onChange={onChange}
/>
```

### Property Renderer

```tsx
<PropertyRenderer
  model="User"
  name="role"
/>
```
