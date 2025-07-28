import { Hono } from 'hono'
import { HomePage } from './views/Home';
import {jsxRenderer} from 'hono/jsx-renderer'

const app = new Hono()
app.use(jsxRenderer())

app.get('/', (c) => {
  // const page = (<Home />)
  return c.html(<HomePage />);
});


export default app;
