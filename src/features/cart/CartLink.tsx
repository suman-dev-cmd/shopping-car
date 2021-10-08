import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import {useAppSelector} from '../../app/hooks';
import {getNumItems,getMemoizedNumItems} from './cartSlice';
export function CartLink() {
  const numbsItem = useAppSelector(getMemoizedNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;{numbsItem?numbsItem:'Cart'}</span>
    </Link>
  );
}
