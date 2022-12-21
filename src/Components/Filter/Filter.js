import { FilterBtn } from '../FilterBtn/FilterBtn';

export const Filter = ({ setStatus, setGender, speciesData }) => {
	const statusData = ['alive', 'dead', 'unknown'];
	const genderData = ['male', 'female', 'unknown', 'genderless'];
	const speciesDataLIst = [
		'Human',
		'Alien',
		'Humaniod',
		'Poopybuyyhole',
		'Mythological',
		'Unknown',
		'Animal',
		'Disease',
		'Robot',
		'Cronenberg',
		'Planet',
	];

	return (
		<>
			<h2 className="text-white text-center mt-4">Filter</h2>
			<p
				className="text-info text-center text-decoration-underline"
				onClick={() => {
					setStatus('');
					setGender('');
					speciesData('');
				}}
			>
				Clear All
			</p>

			<div class="accordion w-25 mx-auto mt-4 " id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Filter by status
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							{statusData.map((text, index) => {
								return (
									<FilterBtn
										setState={setStatus}
										name="status"
										key={index}
										text={text}
										index={index}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Filter by species
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							{speciesDataLIst.map((text, index) => {
								return (
									<FilterBtn
										setState={speciesData}
										name="species"
										key={index}
										text={text}
										index={index}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingThree">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Filter by Gender
						</button>
					</h2>
					<div
						id="collapseThree"
						class="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							{genderData.map((text, index) => {
								return (
									<FilterBtn
										setState={setGender}
										name="gender"
										key={index}
										text={text}
										index={index}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
