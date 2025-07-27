'use client';
import {
  signUpThunk,
  verifySignUp2FAThunk,
} from '@/entities/user/api/userThunkApi';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { useRouter } from 'next/navigation';
import { Input } from '@/shared/ui/inputs';
import { Button } from '@/shared/ui/button';

type InputsSignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type TwoFAInputType = {
  code: string;
};

const initialInputs: InputsSignUpType = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const initial2FAInput: TwoFAInputType = {
  code: '',
};

export default function SignUpForm() {

  const [inputs, setInputs] = useState<InputsSignUpType>(initialInputs);

  const [twoFAInput, setTwoFAInput] = useState<TwoFAInputType>(initial2FAInput);

  const dispatch = useAppDispatch();

  const { isInitialized, twoFAPending, error, twoFAUserId } = useAppSelector(
    (state) => state.user
  );
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
    setTwoFAInput({ ...twoFAInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    try {
      await dispatch(signUpThunk(inputs)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handle2FASubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!twoFAUserId) return;
    try {
      await dispatch(
        verifySignUp2FAThunk({ userId: twoFAUserId, code: twoFAInput.code })
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
            <Input
              type="text"
              placeholder="Введите код 2FA"
              onChange={handle2FAChange}
              name="code"
              value={twoFAInput.code}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <Button type="submit" className={styles.submitButton}>
            Подтвердить
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="Имя"
              onChange={handleChange}
              name="name"
              value={inputs.name}
              className={styles.inputField}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={inputs.email}
              className={styles.inputField}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              name="password"
              value={inputs.password}
              className={styles.inputField}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              name="confirmPassword"
              value={inputs.confirmPassword}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <Button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </Button>
        </form>
      )}
    </div>
  );
}
