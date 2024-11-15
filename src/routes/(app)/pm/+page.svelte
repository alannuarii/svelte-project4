<script>
	import { getNumberMonth } from '../../../lib/js/date';
	import { engines } from '../../../lib/js/engine';
</script>

<section>
	<h2 class="text-center mb-3">PREVENTIVE MAINTENANCE</h2>
	<table class="table">
		<thead>
			<tr>
				<td>Unit</td>
				<td>Mesin</td>
				{#each getNumberMonth() as day}
					<td>{day}</td>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each engines as eng}
				<tr>
					<td>{eng.unit}</td>
					<td>{eng.merk}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
