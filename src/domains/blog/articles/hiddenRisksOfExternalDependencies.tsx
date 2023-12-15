import { Fragment } from "react";
import { CodeBlock } from "../../../common/components/codeBlock";

import { BlogArticle } from "../blogArticle";

const codeExample1 = `// React component wrapper
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";

export type ButtonProps = MantineButtonProps;

export function Button(): JSX.Element {
  return <MantineButton {…props} />
}`;

const codeExample2 = `// constant
import { faBook } from "@fortawesome/pro-solid-svg-icons";

export const bookIcon = faBook;`;

export function HiddenRisksOfExternalDependencies(): JSX.Element {
  return (
    <BlogArticle
      title="The Hidden Risks Of External Dependencies"
      image="/blog/hidden-risks-of-external-dependencies.jpg"
      header={[<p>Discover how external dependencies can present challenges in compatibility, security, and maintenance.</p>]}
      footer={
        <Fragment>
          <h2>Conclusion</h2>
          <p>
            Software dependencies can significantly reduce or increase project development costs. Managing dependencies is not just a
            software problem, and the practices mentioned above can often be applied to other areas of life (any form of creation,
            interpersonal relationships, etc.).
          </p>

          <p>
            The ideal solution is choosing dependencies wisely and using them only when genuinely advantageous. Moreover, it's crucial to
            continually monitor, manage dependencies, and most importantly, separate them from your project as much as possible through
            abstraction.
          </p>
        </Fragment>
      }
    >
      <section>
        <p>
          Developers often use external libraries to make their development process simpler and more cost-effective. But is it always
          advantageous? Even open-source projects, which are available for free, can actually lead to increased development costs.
        </p>
        <p>
          So, what exactly is a software dependency? It's a relationship that might not always benefit both sides. Relying on someone else's
          code can be as problematic as other real-life dependencies like alcohol or smoking. At first, it seems attractive but later proves
          harmful, causing challenges in removing it. However, there are situations when using an external dependency is indeed highly
          beneficial.
        </p>
        <p>
          This article explains why you should carefully consider every dependency before adding it to your project and how to manage these
          dependencies effectively.
        </p>
      </section>

      <section>
        <h2>When to Use External Dependencies</h2>
        <p>
          Using an external library is worthwhile when it solves a problem for which you lack sufficient knowledge or time. It's also
          advantageous when you could write the code yourself, but it would be very expensive (web editors, graphic libraries, game engines,
          databases, frameworks). However, it's not beneficial to add minor utility functions as project dependencies.
        </p>
        <p>
          External dependencies are excellent for rapid prototyping when you need to quickly create the initial version of a project to
          gauge market interest or client needs. Over time, consider rewriting external dependencies into your own code if they don't suit
          your needs or if you need to customize them for your use.
        </p>
        <p>
          External dependencies often fall into libraries and frameworks. A library is reusable code with a specific purpose, ideally
          serving just one function. A framework encompasses tools, libraries, and best practices, providing a structure for building
          software. Avoid writing your own frameworks like React; it's challenging to find people to work on such internal frameworks, and
          they might not surpass existing solutions. Popular frameworks have documentation, active communities, extensive ecosystems of
          associated libraries, and tools.
        </p>
      </section>

      <section>
        <h2>Choosing the Right Library</h2>
        <p>
          Several factors need consideration when selecting a suitable library. The project's age hints at its maturity, but it's not a
          guarantee. The size and engagement of the community are crucial. A library with a last version dating a decade back and
          involvement from only one developer isn't a suitable choice.
        </p>
        <p>
          Also, consider the motivation of the authors: are they paid for developing and maintaining the library? Is there a paid version or
          support available? Does the library have sponsors, or is it a passion project that might abruptly end? Libraries should have clear
          licenses outlining the terms of use.
        </p>
        <p>
          The size of the library and the number of transitive dependencies (dependencies of your dependencies) also play a significant
          role. Consider compatibility with existing project libraries when choosing a new one. Conflicts arise when libraries have common
          dependencies but in different versions, making them challenging to resolve.
        </p>
        <p>
          External libraries often have poor code quality, insufficient type checking, and missing tests. If a library lacks a better
          alternative, you can create a pull request (in open-source projects) to contribute to its improvement. This action also helps
          gauge the maintainer's openness to outside changes. If the maintainer doesn't collaborate, an alternative might be forking the Git
          repository or manually copying the library into the project. However, this approach complicates potential future updates and
          should be a last resort.
        </p>
      </section>

      <section>
        <h2>Integration</h2>
        <p>
          Developers often import a library into a project and start using it immediately. However, this hasty approach leads to numerous
          issues. Direct integration often introduces duplications into the project because settings, initialization, or frequent use of the
          library occur in multiple places.
        </p>

        <p>
          The most significant problem is vendor lock-in, making it challenging to later remove a library extensively used throughout the
          application. The ideal solution is to add an additional abstraction layer, separating the library from all uses in the project,
          significantly easing potential removal or replacement with another implementation. The more thorough you are, the fewer worries
          you'll have in future development.
        </p>

        <CodeBlock>{codeExample1}</CodeBlock>

        <p>
          Even simple code parts like constants should be abstracted using custom constants within the project. For instance, unifying all
          icons in one place using custom constants allowed me to replace a library containing SVG icons effortlessly. Instead of making
          changes across the entire application and risking errors or merge conflicts with a colleague, I only needed to change the icons in
          one place.
        </p>

        <CodeBlock>{codeExample2}</CodeBlock>

        <p>Utilize design patterns like Adapter, Proxy, Facade to separate external dependencies from your codebase.</p>
      </section>

      <section>
        <h2>Versioning</h2>
        <p>
          Libraries and frameworks evolve over time, responding to new user requirements and community trends. They often use iterative
          development to get their functionality to users as soon as possible. Consequently, dependencies may have multiple versions.
          Versioning specifications vary based on the technology and community. For instance, npm, the world's largest software package
          registry, uses the Semantic Versioning (SemVer) specification.
        </p>
        <p>
          SemVer, or semantic versioning, informs users about the magnitude of changes in a package. It consists of three numbers separated
          by dots (x.y.z - Major.Minor.Patch). Increasing the first number (major version) signifies a breaking change in the new version,
          likely requiring manual code migration by the user. The second number (minor version) denotes new features or changes that don't
          cause a breaking change. The third number (patch version) is for fixes. If a package's author follows SemVer, updating to a patch
          version should be safe without requiring user code changes.
        </p>
      </section>

      <section>
        <h2>Maintenance</h2>
        <p>
          Projects often incorporate external libraries that might be several years old. Keeping up with new versions of external libraries
          isn't easy as the software world changes rapidly. Project dependencies are usually versioned, making regular updates as important
          as the initial installation.
        </p>
        <p>
          It's recommended to update dependencies regularly not just for security and fixes but also because it's better to address breaking
          changes immediately while they are relevant within the community. Delayed updates might accumulate changes, making it challenging
          and costly to address all of them at once. This significantly increases the maintenance cost. Updating dependencies regularly
          ensures fewer changes to manage compared to waiting for years and then migrating everything.
        </p>
      </section>

      <section>
        <h2>Security Risks</h2>
        <p>
          A supply-chain attack occurs when an attacker adds a malicious script to a library that previously contained no harmful code and
          has the trust of existing users. The attacker releases a new version of the library that damages or steals data from the
          developer's device. Libraries can inadvertently introduce vulnerabilities due to developer errors. Hence, it's good practice to
          regularly scan libraries and compare them against vulnerability databases. Various paid and free tools offer these features -
          OWASP Dependency-Check, Snyk, Sandworm, among others.
        </p>
      </section>
    </BlogArticle>
  );
}
