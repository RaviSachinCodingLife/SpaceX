import { Dispatch, SetStateAction } from "react";
import { FormData } from "../type";

interface InformationProps {
  form: FormData;
  setForm: Dispatch<SetStateAction<FormData>>;
  username: string;
}

interface CouponOfferCardProps {
  onApply: () => void;
  applied: boolean;
}

export type { InformationProps, CouponOfferCardProps };
