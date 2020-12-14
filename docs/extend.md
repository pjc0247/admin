Implement Your Own Table/Detail/Creation Views
====

Sometimes, you may not satisfied with our default template pages. <br />
In this case, you can ~

Useful Components
----

### DataOperation

It checks whether both conditions below are satisfied.

* User has a proper permission.
* DataProvider has a implementation of matching operation.

Otherwise, child element won't be rendered.

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
