import { BehaviorSubject } from 'rxjs';

const sessionSubject = new BehaviorSubject<string | null>(null);

export const AuthService = {
  session$: sessionSubject.asObservable(),

  login: (username: string, password: string) => {
    if (username === 'admin' && password === '123456') {
      sessionSubject.next('mock-session-token');
    } else {
      sessionSubject.next(null);
    }
  },

  logout: () => {
    sessionSubject.next(null);
  }
};
