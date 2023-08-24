import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils'

export const LoginAtom = atom(false);

export const TokenAtom = atomWithStorage('login_board', false);