import React, { FC, ReactNode } from 'react';
import * as T from './survay_start_components.style';

type ViewProps = {
  children: ReactNode;
};

type Props = {};

export const FirstView = ({ children }: ViewProps) => {
  return <T.FirstView>{children}</T.FirstView>;
};

export const TitleView: FC<Props> = ({ children }) => {
  return <T.TitleView>{children}</T.TitleView>;
};
export const SemiTitleView = ({ children }: ViewProps) => {
  return <T.SemiTitleView>{children}</T.SemiTitleView>;
};

export const ImageView = ({ children }: ViewProps) => {
  return <T.ImageView>{children}</T.ImageView>;
};

export const ButtonStartView = ({ children }: ViewProps) => {
  return <T.ButtonStartView>{children}</T.ButtonStartView>;
};

export const LogoView = ({ children }: ViewProps) => {
  return <T.LogoView>{children}</T.LogoView>;
};
