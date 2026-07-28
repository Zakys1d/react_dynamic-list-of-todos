import { Todo } from './types/Todo';
import { User } from './types/User';

const BASE_URL = 'https://mate.academy/students-api';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function getTodos(): Promise<Todo[]> {
  return wait(300)
    .then(() => fetch(`${BASE_URL}/todos`))
    .then(res => res.json());
}

export function getUser(userId: number): Promise<User> {
  return wait(300)
    .then(() => fetch(`${BASE_URL}/users/${userId}`))
    .then(res => res.json());
}
