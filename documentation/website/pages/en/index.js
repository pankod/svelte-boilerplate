/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props;
		const { baseUrl, docsUrl } = siteConfig;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		const SplashContainer = props => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		);

		const ProjectTitle = () => (
			<h2 className="projectTitle">
				{siteConfig.headerTitle}
				<small className="header-title" >{siteConfig.tagline}</small>
			</h2>
		);

		const PromoSection = props => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		);

		const Button = props => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		);

		return (
			<SplashContainer>
				<div className="inner">
					<img className="home-banner" src="img/banner4.png" />
					<ProjectTitle siteConfig={siteConfig} />

				</div>
				<div className="top-badges">
					<a href="https://codeclimate.com/github/pankod/svelte-boilerplate/maintainability">
						<img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
					</a>
					<a href="https://codeclimate.com/github/pankod/svelte-boilerplate/test_coverage">
						<img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/test_coverage" />
					</a>
					<a href="https://travis-ci.org/pankod/svelte-boilerplate">
						<img src="https://travis-ci.org/pankod/svelte-boilerplate.svg?branch=master" alt="Build Status" />
					</a>
					<a href="https://david-dm.org/pankod/svelte-boilerplate">
						<img src="https://david-dm.org/pankod/svelte-boilerplate.svg" alt="Dependency Status" />
					</a>
					<a href="https://david-dm.org/pankod/svelte-boilerplate#info=devDependencies">
						<img src="https://david-dm.org/pankod/svelte-boilerplate/dev-status.svg" alt="devDependency Status" />
					</a>
				</div>
			</SplashContainer>
		);
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props;
		const { baseUrl } = siteConfig;

		const Block = props => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align={props.align}
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Features </h2>
			</div>
		);

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content:
							'Bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
						image: `${baseUrl}img/webpack.jpg`,
						imageAlign: 'left',
						title: 'Webpack',
					},
				]}
			</Block>
		);

		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content:
                        'Pankod boilerplate is shipped with a CLI tool to streamline the creation of new components',
						image: `${baseUrl}img/cli.gif`,
						imageAlign: 'right',
						title: 'Built-in Project CLI',
					},
				]}
			</Block>
		);
		const LastFeature = () => (
			<Block background="light">
				{[
					{
						content: 'Create, deploy, and run applications by using docker containers.',
						image: `${baseUrl}img/docker2.png`,
						imageAlign: 'right',
						title: 'Docker'
					},
				]}
			</Block>
		);

		const Features = () => (
			<React.Fragment>
				<Block layout="fourColumn" align='center'>
					{[
						{
							content: 'Component framework which compiles your code to tiny, framework-less vanilla JS.',
							image: `${baseUrl}img/svelte.png`,
							imageAlign: 'top',
                            title: 'Svelte',
                            className: 'orm'
						},
						{
							content: 'JavaScript Testing Framework with a focus on simplicity.',
							image: `${baseUrl}img/jest.png`,
							imageAlign: 'top',
							title: 'Jest',
						},
                        {
                            content: "CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.",
                            image: `${baseUrl}img/sass.png`,
                            imageAlign: 'top',
                            title: 'Sass',
                        },
						{
							content: 'Create components, style and test files with one command by using built-in cli.',
							image: `${baseUrl}img/cli-logo.png`,
							imageAlign: 'top',
							title: 'Project CLI',
							className: 'orm'
						}
					]}
				</Block>
			</React.Fragment>
		);



		return (
			<div>
				<HomeSplash siteConfig={siteConfig} language={language} />
				<div className="mainContainer homeMain">
					<Features />
					<FeatureCallout />
					<LearnHow />
					<TryOut />
			{/* 		<LastFeature /> */}
				</div>
			</div>
		);
	}
}

module.exports = Index;
