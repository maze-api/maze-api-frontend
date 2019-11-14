import React from 'react';
import styles from './Content.css';

const AuthContent = () => {

  return (
    <table className={styles.Content}>
      <tbody>
        <tr>
          <th>AUTH Routes</th>
          <th>Request body</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>
            POST /api/auth/signup
          </td>
          <td>
            <pre>
              &#123; email: &lt;email address&gt;,
              <br /> password: &lt;password&gt; &#125;
            </pre>
          </td>
          <td>
            Used to create an account and receive a key
          </td>
        </tr>
        <tr>
          <td>
            PUT /api/auth/refresh-key
          </td>
          <td>
            <pre>
              &#123; email: &lt;email address&gt;,
              <br /> password: &lt;password&gt; &#125;
            </pre>
          </td>
          <td>
            Used to obtain a new API key
          </td>
        </tr>
        <tr>
          <td>
            DELETE /api/auth
          </td>
          <td>
            <pre>
              &#123; email: &lt;email address&gt;,
              <br /> password: &lt;password&gt; &#125;
            </pre>
          </td>
          <td>
            Used to delete one&apos;s account
          </td>
        </tr>
      </tbody>
    </table>
  );

};

export default AuthContent;
