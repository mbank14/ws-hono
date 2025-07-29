import { Hono } from 'hono'
import { HomePage } from './views/Home';
import {jsxRenderer} from 'hono/jsx-renderer'
import { RoomPage } from './views/Room';

const app = new Hono()
app.use(jsxRenderer())

app.get('/', (c) => {
  return c.html(<HomePage />);
});
app.get('/play/:name', (c) => {
  return c.html(<RoomPage />);
});

export default app;
