import AuthProvider from 'app/data-provider/auth';

const App = {
  name: 'your test admin',

  authProvider: new AuthProvider(),

  commonEditorProps: {
    fullWidth: true,
    variant: 'outlined',
    size: 'small'
  },
};
export default App;
