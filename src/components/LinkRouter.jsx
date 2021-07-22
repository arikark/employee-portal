/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export default function LinkRouter({ to, variant, text }) {
  return (
    <Link component={RouterLink} to={to} variant={variant}>
      {text}
    </Link>
  );
}
