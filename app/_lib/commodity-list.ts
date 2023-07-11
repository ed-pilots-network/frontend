// const commidity_flags = [
//   { flag: 'ch', name: 'chemicals' },
//   { flag: 'ci', name: 'consumer items' },
//   { flag: 'fo', name: 'foods' },
//   { flag: 'im', name: 'industrial materials' },
//   { flag: 'ld', name: 'legal drugs' },
//   { flag: 'ma', name: 'machinery' },
//   { flag: 'me', name: 'medicines' },
//   { flag: 'mt', name: 'metals' },
//   { flag: 'mi', name: 'minerals' },
//   { flag: 'sa', name: 'salvage' },
//   { flag: 'sl', name: 'slavery' },
//   { flag: 'te', name: 'technology' },
//   { flag: 'tx', name: 'textiles' },
//   { flag: 'wa', name: 'waste' },
//   { flag: 'we', name: 'weapons' },
// ];

const commodities: string[] = [
  'ch_agronomic_treatment',
  'ch_hydrogen_fuel',
  'ch_explosives',
  'ch_hydrogen_peroxide',
  'ch_liquid_oxygen',
  'ch_mineral_oil',
  'ch_nerve_agents',
  'ch_pesticides',
  'ch_rockforth_fertiliser',
  'ch_surface_stabilisers',
  'ch_synthetic_reagents',
  'ch_tritium',
  'ch_water',
  'ci_clothing',
  'ci_consumer_technology',
  'ci_domestic_appliances',
  'ci_evacuation_shelter',
  'ci_survival_equipment',
  'fo_algae',
  'fo_animal_meat',
  'fo_coffee',
  'fo_fish',
  'fo_food_cartridges',
  'fo_fruits_and_vegetables',
  'fo_grain',
  'fo_synthetic_meat',
  'fo_tea',
  'im_ceramic_composites',
  'im_cmm_composite',
  'im_insulating_membrane',
  'im_meta-alloys',
  'im_micro-weave_cooling_hoses',
  'im_neofabric_insulation',
  'im_polymers',
  'im_semiconductors',
  'im_superconductors',
  'ld_beer',
  'ld_bootleg_liqour',
  'ld_liquor',
  'ld_narcotics',
  'ld_onionhead_gamma_strain',
  'ld_tobacco',
  'ld_wine',
  'ma_articulation_motors',
  'ma_atmospheric_processors',
  'ma_building_fabricators',
  'ma_crop_harvesters',
  'ma_emergency_power_cells',
  'ma_energy_grid_assembly',
  'ma_exhaust_manifold',
  'ma_geological_equipment',
  'ma_heatsink_interlink',
  'ma_HN_shock_mount',
  'ma_ion_distributor',
  'ma_magnetic_emitter_coil',
  'ma_marine_equipment',
  'ma_microbial_furnaces',
  'ma_mineral_extractors',
  'ma_modular_terminals',
  'ma_power_converter',
  'ma_power_generators',
  'ma_power_transfer_bus',
  'ma_radiation_baffle',
  'ma_reinforced_mounting_plate',
  'ma_skimmer_components',
  'ma_thermal_cooling_units',
  'ma_water_purifiers',
  'me_advanced_medicines',
  'me_agri-medicines',
  'me_basic_medicines',
  'me_combat_stabilisers',
  'me_performance_enhancers',
  'me_progenitor_cells',
  'mt_aluminium',
  'mt_beryllium',
  'mt_bismuth',
  'mt_cobalt',
  'mt_copper',
  'mt_gallium',
  'mt_gold',
  'mt_hafnium_178',
  'mt_indium',
  'mt_lanthanum',
  'mt_lithium',
  'mt_osmium',
  'mt_palladium',
  'mt_platinum',
  'mt_praseodymium',
  'mt_samarium',
  'mt_silver',
  'mt_tantalum',
  'mt_thallium',
  'mt_thorium',
  'mt_titanium',
  'mt_uranium',
  'mi_alexandrite',
  'mi_bauxite',
  'mi_benitoite',
  'mi_bertrandite',
  'mi_bromellite',
  'mi_coltan',
  'mi_cryolite',
  'mi_gallite',
  'mi_goslarite',
  'mi_grandidierite',
  'mi_indite',
  'mi_jadeite',
  'mi_lepidolite',
  'mi_lithium_hydroxide',
  'mi_low_temperature_diamonds',
  'mi_methane_clathrate',
  'mi_methanol_monohydrate_crystals',
  'mi_moissanite',
  'mi_monazite',
  'mi_musgravite',
  'mi_painite',
  'mi_pyrophyllite',
  'mi_rhodplumsite',
  'mi_rutile',
  'mi_serendibite',
  'mi_taaffeite',
  'mi_uraninite',
  'mi_void_opals',
  'sa_ai_relics',
  'sa_ancient_artefact',
  'sa_ancient_key',
  'sa_anomaly_particles',
  'sa_antimatter_containment_unit',
  'sa_antique_jewellery',
  'sa_antiquities',
  'sa_assault_plans',
  'sa_black_box',
  'sa_commercial_samples',
  'sa_damaged_escape_pod',
  'sa_data_core',
  'sa_diplomatic_bag',
  'sa_earth_relics',
  'sa_encrypted_correspondence',
  'sa_encrypted_data_storage',
  'sa_experimental_chemicals',
  'sa_fossil_remnants',
  'sa_gene_bank',
  'sa_geological_samples',
  'sa_guardian_casket',
  'sa_guardian_orb',
  'sa_guardian_relic',
  'sa_guardian_tablet',
  'sa_guardian_totem',
  'sa_guardian_urn',
  'sa_hostage',
  'sa_large_survey_data_cache',
  'sa_military_intelligence',
  'sa_military_plans',
  'sa_mollusc_brain_tissue',
  'sa_mollusc_fluid',
  'sa_mollusc_membrane',
  'sa_mollusc_mycelium',
  'sa_mollusc_soft_tissue',
  'sa_mollusc_spores',
  'sa_mysterious_idol',
  'sa_occupied_escape_pod',
  'sa_personal_effects',
  'sa_pod_core_tissue',
  'sa_pod_dead_tissue',
  'sa_pod_mesoglea',
  'sa_pod_outer_tissue',
  'sa_pod_shell_tissue',
  'sa_pod_surface_tissue',
  'sa_pod_tissue',
  'sa_political_prisoner',
  'sa_precious_gems',
  'sa_prohibited_research_materials',
  'sa_prototype_tech',
  'sa_rare_artwork',
  'sa_rebel_transmissions',
  'sa_sap_8_core_container',
  'sa_scientific_research',
  'sa_scientific_samples',
  'sa_small_survey_data_cache',
  'sa_space_pioneer_relics',
  'sa_tactical_data',
  'sa_technical_blueprints',
  'sa_thargoid_basilisk_tissue_sample',
  'sa_thargoid_biological_matter',
  'sa_thargoid_cyclops_tissue_sample',
  'sa_thargoid_glaive_tissue_sample',
  'sa_thargoid_heart',
  'sa_thargoid_hydra_tissue_sample',
  'sa_thargoid_link',
  'sa_thargoid_probe',
  'sa_thargoid_resin',
  'sa_thargoid_sensor',
  'sa_thargoid_medusa_tissue_sample',
  'sa_thargoid_scout_tissue_sample',
  'sa_thargoid_technology_samples',
  'sa_time_capsule',
  'sa_trade_data',
  'sa_trinkets_of_hidden_fortune',
  'sa_unclassified_relic',
  'sa_unstable_data_core',
  'sa_wreckage_components',
  'sl_imperial_slaves',
  'sl_slaves',
  'te_advanced_catalysers',
  'te_animal_monitors',
  'te_aquaponic_systems',
  'te_auto_fabricators',
  'te_bioreducing_lichen',
  'te_computer_components',
  'te_he_suits',
  'te_hardware_diagnostic_sensor',
  'te_ion_distributor',
  'te_land_enrichment_systems',
  'te_medical_diagnostic_equipment',
  'te_micro_controllers',
  'te_muon_imager',
  'te_nanobreakers',
  'te_resonating_separators',
  'te_robotics',
  'te_structural_regulators',
  'te_telemetry_suite',
  'tx_conductive_ceramics',
  'tx_leather',
  'tx_military_grade_fabrics',
  'tx_natural_fabrics',
  'tx_sythetic_fabrics',
  'wa_biowaste',
  'wa_chemical_waste',
  'wa_scrap',
  'wa_toxic_waste',
  'we_battle_weapons',
  'we_landmines',
  'we_non_lethal_weapons',
  'we_personal_weapons',
  'we_reactive_armour',
];

export default commodities;