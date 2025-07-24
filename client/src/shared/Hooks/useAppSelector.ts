import { RootState } from "@/store/store";
import { type TypedUseSelectorHook, useSelector } from "react-redux";

// Создаем пользовательский хук для использования селектора с правильным типом
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;