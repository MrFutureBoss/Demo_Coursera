import React from "react";
import type { Test } from "@/store/interface/tests";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { urlToHyphenated } from "@/utilities/url/urlToHyphenated";
import styles from "@/styles/learn/test_info.module.scss";

export default function TestInfo({ test }: { test: Test }) {
  const router = useRouter();
  const handleDoTestNow = () => {
    router.push(`${urlToHyphenated(test?.name)}-${test?.id}/attempt`);
  };

  return (
    <div>
      <div className="text-[3rem]">{test?.name}</div>
      <div className={styles.test_info_do_test_now}>
        <div className={styles.title}>Test Details</div>
        <div className={styles.details}>
          <div className="flex justify-center gap-10">
            <div>
              <p>Time to complete:</p>
              <p>{test?.time} minutes</p>
            </div>
            <div>
              <p>Attempts:</p>
              <p>2 / {test?.max_attempt} lefts</p>
            </div>
          </div>
          <Button onClick={handleDoTestNow} color="primary" variant="solid">
            Do test now
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
