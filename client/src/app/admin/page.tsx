'use client';
import {
  signInThunk,
  signOutThunk,
  verifySignIn2FAForAdminThunk,
} from '@/entities/user/api/userThunkApi';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

type InputsSignInType = {
  email: string;
  password: string;
};

type TwoFAInputType = {
  code: string;
};

const initialInputs: InputsSignInType = {
  email: '',
  password: '',
};

const initial2FAInput: TwoFAInputType = {
  code: '',
};

export default function page() {
  const dispatch = useAppDispatch();
  const { twoFAPending, twoFAUserId, error, isInitialized } = useAppSelector(
    (state) => state.user,
  );

  const [inputs, setInputs] = useState<InputsSignInType>(initialInputs);
  const [twoFAInput, setTwoFAInput] = useState<TwoFAInputType>(initial2FAInput);
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady && isInitialized) {
      router.push('/admin/menu/');
    }
  }, [isReady, isInitialized, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handle2FAChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTwoFAInput({ ...twoFAInput, code: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await dispatch(signInThunk(inputs)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handle2FASubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!twoFAUserId) return;
    try {
      await dispatch(
        verifySignIn2FAForAdminThunk({
          userId: twoFAUserId,
          code: twoFAInput.code,
        }),
      ).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      {twoFAPending ? (
        <form onSubmit={handle2FASubmit}>
          <div>
            <input
              type="text"
              placeholder="Введите код 2FA"
              onChange={handle2FAChange}
              name="code"
              value={twoFAInput.code}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <button type="submit" className={styles.submitButton}>
            Подтвердить
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={inputs.email}
              className={styles.inputField}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              name="password"
              value={inputs.password}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}

          <div className={styles.buttonRow}>
            <button type="submit" className={styles.submitButton}>
              Войти
            </button>
            <button
              className={styles.logoutButton}
              onClick={() => dispatch(signOutThunk())}
            >
              Выход
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
