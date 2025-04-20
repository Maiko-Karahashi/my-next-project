import styles from "./index.module.css";

type Props = {
  children: React.ReactNodde;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
