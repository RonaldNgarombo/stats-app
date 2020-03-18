import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart
} from 'react-native-chart-kit';

export default function App() {
	const chartConfig = {
		backgroundColor: '#e26a00',
		backgroundGradientFrom: '#fb8c00',
		backgroundGradientTo: '#ffa726',
		decimalPlaces: 2,
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		// color: `rgba(255, 255, 255, 1)`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16
		},
		propsForDots: {
			r: '6',
			strokeWidth: '2',
			stroke: '#ffa726'
		}
	};

	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43]
			}
		]
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text>Bezier Line Chart</Text>

				<LineChart
					data={{
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June'
						],

						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100
								]
							}
						]
					}}
					width={Dimensions.get('window').width}
					height={220}
					yAxisLabel="$"
					xAxisLabel="k"
					yAxisInterval={1}
					chartConfig={{
						backgroundColor: '#e26a00',
						backgroundGradientFrom: '#fb8c00',
						backgroundGradientTo: '#ffa726',
						decimalPlaces: 2,
						color: (opacity = 1) =>
							`rgba(255, 255, 255, ${opacity})`,
						// color: `rgba(255, 255, 255, 1)`,
						labelColor: (opacity = 1) =>
							`rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16
						},
						propsForDots: {
							r: '6',
							strokeWidth: '2',
							stroke: '#ffa726'
						}
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16
					}}
				/>

				<ProgressChart
					style={{
						borderRadius: 20
					}}
					data={{
						labels: ['Swim', 'Bike', 'Run'],
						data: [0.4, 0.6, 0.8]
					}}
					width={Dimensions.get('window').width}
					height={220}
					chartConfig={chartConfig}
					hideLegend={false}
				/>

				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<BarChart
						style={{
							borderRadius: 20
						}}
						data={{
							labels: [
								'January',
								'February',
								'March',
								'April',
								'May',
								'June'
							],
							datasets: [
								{
									data: [20, 45, 28, 80, 99, 43]
								}
							]
						}}
						width={Dimensions.get('window').width}
						height={220}
						yAxisLabel="$"
						chartConfig={chartConfig}
						verticalLabelRotation={30}
					/>
				</View>

				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<StackedBarChart
						style={{ borderRadius: 20 }}
						data={{
							labels: ['Test1', 'Test2'],
							legend: ['L1', 'L2', 'L3'],
							data: [
								[60, 60, 60],
								[30, 30, 60]
							],
							barColors: ['#dfe4ea', '#ced6e0', '#a4b0be']
						}}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
					/>
				</View>

				<Text>Pie Chart</Text>
				<View>
					<PieChart
						data={[
							{
								name: 'Seoul',
								population: 21500000,
								color: 'rgba(131, 167, 234, 1)',
								legendFontColor: '#7F7F7F',
								legendFontSize: 15
							},
							{
								name: 'Toronto',
								population: 2800000,
								color: '#F00',
								legendFontColor: '#7F7F7F',
								legendFontSize: 15
							},
							{
								name: 'Beijing',
								population: 527612,
								color: 'red',
								legendFontColor: '#7F7F7F',
								legendFontSize: 15
							},
							{
								name: 'New York',
								population: 8538000,
								color: '#ff33ff',
								legendFontColor: '#7F7F7F',
								legendFontSize: 15
							},
							{
								name: 'Moscow',
								population: 11920000,
								color: 'rgb(0, 0, 255)',
								legendFontColor: '#7F7F7F',
								legendFontSize: 15
							}
						]}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
						accessor="population"
						backgroundColor="transparent"
						paddingLeft="15"
						absolute
					/>
				</View>

				<Text>ContributionGraph(heatmap)</Text>
				<View>
					<ContributionGraph
						values={[
							{ date: '2020-01-02', count: 1 },
							{ date: '2020-01-03', count: 2 },
							{ date: '2020-01-04', count: 3 },
							{ date: '2020-01-05', count: 4 },
							{ date: '2020-01-06', count: 5 },
							{ date: '2020-01-30', count: 2 },
							{ date: '2020-01-31', count: 3 },
							{ date: '2020-03-01', count: 2 },
							{ date: '2020-04-02', count: 4 },
							{ date: '2020-03-05', count: 2 },
							{ date: '2020-02-30', count: 4 }
						]}
						endDate={new Date('2020-04-18')}
						numDays={105}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
