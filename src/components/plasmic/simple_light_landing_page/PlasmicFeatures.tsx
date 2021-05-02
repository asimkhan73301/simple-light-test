// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJYXKgZnx7Dii2wBUWWZqb
// Component: g0Sq3RmbZ_NPtI
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: g0_j62_BPJp6v/component
import Section from "../../Section"; // plasmic-import: g0bBbzoQq3T-f/component
import Bullet from "../../Bullet"; // plasmic-import: kFjiPgTQ08UYEF/component
import LinkButton from "../../LinkButton"; // plasmic-import: 0LMnkmQ24vQZ6/component
import HomeCta from "../../HomeCta"; // plasmic-import: 7FullgpCLZoOt/component
import Footer from "../../Footer"; // plasmic-import: 4Wkg2j6gx9N6n/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yWp7-4FoVwA9fa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: wJYXKgZnx7Dii2wBUWWZqb/projectcss
import * as sty from "./PlasmicFeatures.module.css"; // plasmic-import: g0Sq3RmbZ_NPtI/css

import simpleProject1J2BYbAlvZ35Cx from "./images/simpleProject.png"; // plasmic-import: 1J2bYBAlvZ35Cx/picture
import taskSeEGkM0V0WuJLj from "./images/task.png"; // plasmic-import: seEGkM0V0wuJLj/picture

export type PlasmicFeatures__VariantMembers = {};

export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<typeof Section>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultFeaturesProps {
  className?: string;
}

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__icJuN)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
              subtitle={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__kh80J
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__zH)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__jeSkh)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__vObHh
                        )}
                      >
                        {"Powerful suite of tools"}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box___5XOk5
                        )}
                      >
                        {
                          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                        }
                      </div>

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__dwHKn
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__zfpEe
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__rD6Zt
                        )}
                      />

                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__tiGsY
                        )}
                      >
                        {
                          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                        }
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(defaultcss.all, sty.box__bkSzO)}
                      >
                        <LinkButton
                          text={"Start free trial"}
                          type={"solidBlue" as const}
                        />

                        <LinkButton
                          text={"View demo"}
                          type={"outlineBlue" as const}
                        />
                      </p.Stack>
                    </p.Stack>

                    <div className={classNames(defaultcss.all, sty.box__a8ZhP)}>
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__j9Va2)}
                        role={"img"}
                        src={simpleProject1J2BYbAlvZ35Cx}
                      />

                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__vMkFd)}
                        role={"img"}
                        src={taskSeEGkM0V0WuJLj}
                      />
                    </div>
                  </p.Stack>
                </React.Fragment>
              }
              title={"The ultimate in feature set."}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: typeof Section;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFeatures__VariantsArgs;
  args?: PlasmicFeatures__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFeatures__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps
    });

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
